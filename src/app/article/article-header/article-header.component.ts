import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
