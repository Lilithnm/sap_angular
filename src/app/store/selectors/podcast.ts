import { createFeatureSelector } from '@ngrx/store';
import { Podcast } from '../interfaces/podcast.interface';
 
export const selectPodcasts = createFeatureSelector<Podcast[]>('myPodcasts');