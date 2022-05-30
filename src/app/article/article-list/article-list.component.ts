import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/viewmodel/type';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter: number = 0;

  constructor(public datasvc: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.counter++;
    }, 2000);
  }

}
