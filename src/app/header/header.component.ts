import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'demo2';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  counter = 0;

  constructor() { }
  doModify(altKey: boolean) {
    if (altKey)
      this.title = 'The Edward Web';
    this.counter++;
  }

  ngOnInit(): void {
  }

}
