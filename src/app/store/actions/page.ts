
import { createAction, props } from '@ngrx/store';
import { HomePage } from '../interfaces/pages.interface';
 
export const invokehomePageAPI = createAction(
  '[homePage API] Invoke homePage Fetch API'
);
 
export const homePageFetchAPISuccess = createAction(
  '[homePage API] Fetch API Success',
  props<{ homePageData: HomePage[] }>()
);