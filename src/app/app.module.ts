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

import { EffectsModule } from '@ngrx/effects';
import { PodcastsEffect } from './store/effects/podcasts';

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
    EffectsModule.forFeature([PodcastsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
