import { createReducer, on } from '@ngrx/store';
import { HomePage } from '../interfaces/pages.interface';
import { homePageFetchAPISuccess } from '../actions/page';
 
export const initialState: ReadonlyArray<HomePage> = [];
 
export const homePageReducer = createReducer(
  initialState,
  on(homePageFetchAPISuccess, (state, { homePageData }) => {
    return homePageData;
  })
);
