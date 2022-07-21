
import { createAction, props } from '@ngrx/store';
import { Menu } from '../interfaces/menu.interface';
 
export const invokeMenuAPI = createAction(
  '[Menu API] Invoke Menu Fetch API'
);
 
export const menuFetchAPISuccess = createAction(
  '[Menu API] Fetch API Success',
  props<{ allMenu: Menu[] }>()
);