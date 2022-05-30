import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/viewmodel/type';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  data: Array<PageInfo> = [] as Array<PageInfo>;

  counter: number = 0;

  constructor(public datasvc: DataService) {

  }

  ngOnInit(): void {
    this.datasvc.getData().subscribe(result => {
      this.data = result;
    });
  }

  doDelete(item: PageInfo) {
    this.datasvc.doDelete(item).subscribe({
      next: result => this.data = this.data.filter(v => v.id !== item.id),
      error: error => console.log(error)
    })
  }

  doModify($event: PageInfo) {
    this.datasvc.doModify($event).subscribe({
      next: result => {
        this.data = this.data.map(item => {
          if (item.id === $event.id)
            return Object.assign({}, item, $event);
          return item;
        })
      },
      error: error => console.log(error)
    })
  }


}
