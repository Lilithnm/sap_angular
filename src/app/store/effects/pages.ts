import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { withLatestFrom, map, mergeMap, first } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { homePageFetchAPISuccess, invokehomePageAPI } from '../actions/page';
import { selecthomePage } from '../selectors/pages';
 
@Injectable()
export class PagesEffect {
  constructor(
    private actions$: Actions,
    private homePageService: AppService,
    private store: Store
  ) {}
 
  loadhomePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokehomePageAPI),
      withLatestFrom(this.store.pipe(select(selecthomePage))),
      mergeMap(([, homePageformStore]) => {
        if (homePageformStore.length > 0) {
          return EMPTY;
        }
        return this.homePageService
          .getPage('home')
          .pipe(map((data: any) => homePageFetchAPISuccess({ homePageData: data })));
      })
    )
  );
}