import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { withLatestFrom, map, mergeMap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { menuFetchAPISuccess, invokeMenuAPI } from '../actions/menu';
import { selectMenu } from '../selectors/menu';
 
@Injectable()
export class MenuEffect {
  constructor(
    private actions$: Actions,
    private menuService: AppService,
    private store: Store
  ) {}
 
  loadAllMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeMenuAPI),
      withLatestFrom(this.store.pipe(select(selectMenu))),
      mergeMap(([, menuformStore]) => {
        if (menuformStore.length > 0) {
          return EMPTY;
        }
        return this.menuService
          .getMenu()
          .pipe(map((data: any) => menuFetchAPISuccess({ allMenu: data })));
      })
    )
  );
}