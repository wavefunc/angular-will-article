import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleHeaderComponent,
    ArticleBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ArticleListComponent
  ]
})
export class ArticleModule { }
