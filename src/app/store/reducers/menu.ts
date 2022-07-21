import { createReducer, on } from '@ngrx/store';
import { Menu } from '../interfaces/menu.interface';
import { menuFetchAPISuccess } from '../actions/menu';
 
export const initialState: ReadonlyArray<Menu> = [];
 
export const menuReducer = createReducer(
  initialState,
  on(menuFetchAPISuccess, (state, { allMenu }) => {
    return allMenu;
  })
);
