import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input()
  item: any;

  @Input()
  counter: any;

  constructor() {
    console.log('ArticleBodyComponent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ArticleBodyComponent ' + this.item.id + ': ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ArticleBodyComponent ' + this.item.id + ': ngOnInit');
  }

}
