import { createFeatureSelector } from '@ngrx/store';
import { HomePage } from '../interfaces/pages.interface';
 
export const selecthomePage = createFeatureSelector<HomePage[]>('myHomePage');