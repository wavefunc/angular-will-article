import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageInfo } from 'src/app/viewmodel/type';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input()
  item: PageInfo = {} as PageInfo;

  @Input()
  counter = 0;

  constructor() {
    // console.log('ArticleBodyComponent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ArticleBodyComponent ' + this.item.id + ': ngOnChanges');
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('ArticleBodyComponent ' + this.item.id + ': ngOnInit');
  }

}
