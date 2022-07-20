import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Podcast } from './store/interfaces/podcast.interface';
import { select, Store } from '@ngrx/store';

import { invokePodcastsAPI } from './store/actions/podcasts';
import { selectPodcasts } from './store/selectors/podcast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  podcasts$: Observable<Array<Podcast>>;
  constructor(private store: Store) {

  }
 
  podcastsLst$ = this.store.pipe(select(selectPodcasts));
  ngOnInit(): void {
    this.store.dispatch(invokePodcastsAPI());

    console.log(this.podcastsLst$)
    
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
