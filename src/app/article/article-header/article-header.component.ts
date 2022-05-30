import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  item: any;

  orig_item: any;

  isEdit = false;
  newTitle = '';

  constructor() { }


  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  deleteArticle() {
    this.delete.emit(this.item);
  }

  doCancel(){
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  doEdit() {
    this.titleChanged.emit(this.item);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.orig_item = changes['item'].currentValue;
      this.item = Object.assign({}, changes['item'].currentValue)
      }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
