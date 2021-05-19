import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostListItem } from 'src/app/models/post-list-item';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: PostListItem;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDetail(post: PostListItem) {
    let extras = {
      queryParams: {
        "post": JSON.stringify(post)
      }
    }
    this.router.navigate(['post'], extras);
  }
}
