import { createReducer, on } from '@ngrx/store';
import { BlogPost } from '../interfaces/blogposts.interface';
import { blogpostsFetchAPISuccess } from '../actions/blogposts';
 
export const initialState: ReadonlyArray<BlogPost> = [];
 
export const blogpostReducer = createReducer(
  initialState,
  on(blogpostsFetchAPISuccess, (state, { allBlogPosts }) => {
    return allBlogPosts;
  })
);
