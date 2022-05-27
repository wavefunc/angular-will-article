import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleHeaderComponent,
    ArticleBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleListComponent
  ]
})
export class ArticleModule { }
