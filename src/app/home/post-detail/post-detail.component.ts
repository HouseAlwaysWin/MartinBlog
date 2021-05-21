import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from 'src/app/models/post-list-item';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostDetailComponent implements OnInit {
  title: string;
  content: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let post: PostListItem = JSON.parse(params["post"]);
      console.log(post);
      if (post?.htmlName) {
        this.title = post.title;
        this.getHtmlContent(post.htmlName);
      }
    })
  }

  getHtmlContent(name: string) {
    const headers = new HttpHeaders({
      Accept: 'text/html',
    });

    this.http.get(`assets/blog-data/posts/${name}.html`, { responseType: "text" }).subscribe(data => {
      this.content = data;
    });

  }

}
