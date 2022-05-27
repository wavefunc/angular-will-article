import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item: any;

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

  doEdit(title: string) {
    this.newTitle = title;
    this.titleChanged.emit({id: this.item.id, title: title});
  }

  ngOnInit(): void {
    this.newTitle = this.item.title;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
