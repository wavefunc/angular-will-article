import { PageInfo } from '../app/viewmodel/type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // data: Array<PageInfo> = [] as Array<PageInfo>;


  constructor(private http: HttpClient) {
    // http.get<Array<PageInfo>>('http://localhost:4200/api/articles.json')
    //   .subscribe(result => {
    //     this.data = result;
    //   });
  }

  getData() {
    return this.http.get<Array<PageInfo>>('http://localhost:4200/api/articles.json');
  }

  ngOnInit(): void {
  }

  doDelete(item: PageInfo) {
    return this.http.delete<Array<PageInfo>>('http://localhost:4200/api/articles.json' + item.id);
  }

  doModify(post: PageInfo) {
    return this.http.put<Array<PageInfo>>('http://localhost:4200/api/articles.json' + post.id, post);
  }

}
