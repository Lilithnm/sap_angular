import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Podcast } from './store/interfaces/podcast.interface';
import { select, Store } from '@ngrx/store';

import { invokePodcastsAPI } from './store/actions/podcasts';
import { selectPodcasts } from './store/selectors/podcast';
import { selectBlogPosts } from './store/selectors/blogposts';
import { invokeBlogPostsAPI } from './store/actions/blogposts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private store: Store) {
  }
 
  podcastsLst$ = this.store.pipe(select(selectPodcasts));
  blogPostsLst$ = this.store.pipe(select(selectBlogPosts));
  ngOnInit(): void {
    this.store.dispatch(invokePodcastsAPI());
    this.store.dispatch(invokeBlogPostsAPI());

  }
/*
  getPodcast(form: NgForm) {
    this.store.dispatch(
      new AddArticleAction(form.value)
    );
    form.reset();
  }
  */
}
