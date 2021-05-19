import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostListItem } from '../models/post-list-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: PostListItem[];
  constructor(
    private router: Router,
    private http: HttpClient) {

  }
  ngOnInit(): void {
    // const headers = new HttpHeaders({
    //   Accept: 'text/html',
    // });
    // this.http.get('assets/blog-data/posts/firstpost.html', { responseType: "text" }).subscribe(data => {
    //   this.posts = data;
    //   console.log("getData");
    //   console.log(data);
    // });

    this.http.get<PostListItem[]>('assets/blog-data/posts.json')
      .pipe(

      )
      .subscribe(data => {
        console.log(data);
        this.posts = data;
      })
  }



}
