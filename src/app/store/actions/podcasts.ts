
import { createAction, props } from '@ngrx/store';
import { Podcast } from '../interfaces/podcast.interface';
 
export const invokePodcastsAPI = createAction(
  '[Podcasts API] Invoke Podcasts Fetch API'
);
 
export const podcastsFetchAPISuccess = createAction(
  '[Podcasts API] Fetch API Success',
  props<{ allPodcasts: Podcast[] }>()
);