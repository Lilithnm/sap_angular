import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import { StoreModule } from '@ngrx/store';
import { podcastReducer } from './store/reducers/podcast';
import { blogpostReducer } from './store/reducers/blogposts';

import { EffectsModule } from '@ngrx/effects';
import { PodcastsEffect } from './store/effects/podcasts';
import { BlogPostsEffect } from './store/effects/blogposts';
import { menuReducer } from './store/reducers/menu';
import { MenuEffect } from './store/effects/menu';
import { homePageReducer } from './store/reducers/pages';
import { PagesEffect } from './store/effects/pages';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule, 
    StoreModule.forRoot({}), 
    EffectsModule.forRoot(), 
    StoreModule.forFeature('myPodcasts', podcastReducer),
    StoreModule.forFeature('myBlogPosts', blogpostReducer),
    StoreModule.forFeature('myMenu', menuReducer),
    StoreModule.forFeature('myHomePage', homePageReducer),
    EffectsModule.forFeature([PodcastsEffect, BlogPostsEffect, MenuEffect, PagesEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
