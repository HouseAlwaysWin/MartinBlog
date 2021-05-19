import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostTagComponent } from './post-tag/post-tag.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';



@NgModule({
  declarations: [HomeComponent, PostDetailComponent, PostTagComponent, PostListItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
