
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Server } from '../../environments/globals';
import { Podcast } from '../store/interfaces/podcast.interface';
import { BlogPost } from '../store/interfaces/blogposts.interface';
import { Menu } from '../store/interfaces/menu.interface';
import { HomePage } from '../store/interfaces/pages.interface';
@Injectable({
  providedIn: 'root'
})
export class AppService {

 constructor(private http: HttpClient) { }

 getPodcasts() {
    return this.http.get<Podcast[]>(Server+'podcasts');
  }

  getBlogPosts() {
    return this.http.get<BlogPost[]>(Server+'posts');
  }
  getMenu() {
    return this.http.get<Menu[]>(Server+'menu');
  }
  getPage(slug:string){
    return this.http.get<HomePage>(Server+'pages/?slug='+slug);
  }

}