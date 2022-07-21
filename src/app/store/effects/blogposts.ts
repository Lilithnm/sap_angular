import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { withLatestFrom, map, mergeMap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { blogpostsFetchAPISuccess, invokeBlogPostsAPI } from '../actions/blogposts';
import { selectBlogPosts } from '../selectors/blogposts';
 
@Injectable()
export class BlogPostsEffect {
  constructor(
    private actions$: Actions,
    private blogpostsService: AppService,
    private store: Store
  ) {}
 
  loadAllBlogPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBlogPostsAPI),
      withLatestFrom(this.store.pipe(select(selectBlogPosts))),
      mergeMap(([, blogpostformStore]) => {
        if (blogpostformStore.length > 0) {
          return EMPTY;
        }
        return this.blogpostsService
          .getBlogPosts()
          .pipe(map((data: any) => blogpostsFetchAPISuccess({ allBlogPosts: data })));
      })
    )
  );
}