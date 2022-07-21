import { createFeatureSelector } from '@ngrx/store';
import { BlogPost } from '../interfaces/blogposts.interface';
 
export const selectBlogPosts = createFeatureSelector<BlogPost[]>('myBlogPosts');