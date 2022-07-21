import { createReducer, on } from '@ngrx/store';
import { Podcast } from '../interfaces/podcast.interface';
import { podcastsFetchAPISuccess } from '../actions/podcasts';
 
export const initialState: ReadonlyArray<Podcast> = [];
 
export const podcastReducer = createReducer(
  initialState,
  on(podcastsFetchAPISuccess, (state, { allPodcasts }) => {
    return allPodcasts;
  })
);
