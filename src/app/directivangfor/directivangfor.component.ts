import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangfor',
  templateUrl: './directivangfor.component.html',
  styleUrls: ['./directivangfor.component.scss']
})
export class DirectivangforComponent implements OnInit {
  chicas: any[];
  constructor() {
    this.chicas = ['ambar', 'Erika', 'mary', 'lily',];
   }

  ngOnInit() {
  }

}
