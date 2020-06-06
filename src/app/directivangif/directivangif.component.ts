import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangif',
  templateUrl: './directivangif.component.html',
  styleUrls: ['./directivangif.component.scss']
})
export class DirectivangifComponent implements OnInit {
  name: any;
  apellido: any;
  descativado: any = 'descativado';
  constructor() { }

  ngOnInit() {
  }

}
