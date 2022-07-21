import { createFeatureSelector } from '@ngrx/store';
import { Menu } from '../interfaces/menu.interface';
 
export const selectMenu = createFeatureSelector<Menu[]>('myMenu');