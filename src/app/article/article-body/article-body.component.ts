import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit {
  @Input()
  item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
