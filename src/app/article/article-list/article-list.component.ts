import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/viewmodel/type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  data$: Observable<any> = {} as Observable<any>;

  counter: number = 0;

  constructor(public datasvc: DataService) {

  }

  ngOnInit(): void {
    this.data$ = this.datasvc.getData();
  }

}
