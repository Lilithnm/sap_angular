
import { createAction, props } from '@ngrx/store';
import { BlogPost } from '../interfaces/blogposts.interface';
 
export const invokeBlogPostsAPI = createAction(
  '[BlogPosts API] Invoke BlogPosts Fetch API'
);
 
export const blogpostsFetchAPISuccess = createAction(
  '[BlogPosts API] Fetch API Success',
  props<{ allBlogPosts: BlogPost[] }>()
);