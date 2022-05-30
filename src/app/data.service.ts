import { PageInfo } from '../app/viewmodel/type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
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
