import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PostListItem } from '../models/post-list-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: PostListItem[] = [];
  postsAll: PostListItem[];
  postTotalCount: number;
  postPerPages: number = 10;
  constructor(
    private router: Router,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPostsInit();
  }

  getPostsInit() {
    this.http.get<PostListItem[]>('assets/blog-data/posts.json')
      .pipe(
        map((posts: PostListItem[]) => {
          return posts.filter(p => p.published)
        })
      )
      .subscribe(data => {
        this.postsAll = data;
        this.postTotalCount = data.length;
        this.posts = this.paginate(data, 1);
      })
  }

  paginate(data, pageNum) {
    return data.slice((pageNum - 1) * this.postPerPages, pageNum * this.postPerPages)
  }

  onPageChange(e) {
    this.posts = this.paginate(this.postsAll, e.page + 1)
    console.log(this.posts);
  }



}
