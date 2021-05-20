import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostTagComponent } from './post-tag/post-tag.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, PostDetailComponent, PostTagComponent, PostListItemComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
