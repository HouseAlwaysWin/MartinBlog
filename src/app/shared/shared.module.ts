import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PaginatorModule } from 'primeng/paginator';
import { TextTrucatePipe } from './pipes/text-trucate.pipe';

@NgModule({
  declarations: [TextTrucatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DividerModule,
    MenuModule,
    ScrollTopModule,
    PaginatorModule,
    TextTrucatePipe
  ]
})
export class SharedModule { }
