import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { withLatestFrom, map, mergeMap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { podcastsFetchAPISuccess, invokePodcastsAPI } from '../actions/podcasts';
import { selectPodcasts } from '../selectors/podcast';
 
@Injectable()
export class PodcastsEffect {
  constructor(
    private actions$: Actions,
    private podcastsService: AppService,
    private store: Store
  ) {}
 
  loadAllPodcasts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokePodcastsAPI),
      withLatestFrom(this.store.pipe(select(selectPodcasts))),
      mergeMap(([, podcastformStore]) => {
        if (podcastformStore.length > 0) {
          return EMPTY;
        }
        return this.podcastsService
          .getPodcasts()
          .pipe(map((data: any) => podcastsFetchAPISuccess({ allPodcasts: data })));
      })
    )
  );
}