import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Podcast } from './store/interfaces/podcast.interface';
import { select, Store } from '@ngrx/store';

import { invokePodcastsAPI } from './store/actions/podcasts';
import { selectPodcasts } from './store/selectors/podcast';
import { selectBlogPosts } from './store/selectors/blogposts';
import { invokeBlogPostsAPI } from './store/actions/blogposts';
import { selectMenu } from './store/selectors/menu';
import { invokeMenuAPI } from './store/actions/menu';
import { selecthomePage } from './store/selectors/pages';
import { invokehomePageAPI } from './store/actions/page';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  subscribeForm: FormGroup;

    invalid = false;
  constructor(private store: Store) {
    this.subscribeForm = new FormGroup({
      email: new FormControl(null, [ Validators.required,  Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ])
    });
      
  }
 
  podcastsLst$ = this.store.pipe(select(selectPodcasts));
  blogPostsLst$ = this.store.pipe(select(selectBlogPosts));
  menuLst$ = this.store.pipe(select(selectMenu));
  homePageData$ = this.store.pipe(select(selecthomePage));
  ngOnInit(): void {
    this.store.dispatch(invokePodcastsAPI());
    this.store.dispatch(invokeBlogPostsAPI());
    this.store.dispatch(invokeMenuAPI());
    this.store.dispatch(invokehomePageAPI());

  }


  subsc(){
    if(this.subscribeForm.invalid){
      this.invalid=true;
    }
    else{

    }
  }
}
