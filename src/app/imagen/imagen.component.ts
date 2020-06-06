import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {
  file;
  constructor() { }

  ngOnInit() {
    this.createFile();
  }
  async createFile() {
    const response = await fetch('http://localhost:3000/uploads/1582840686081.png');
    const data = await response.blob();
    const metadata = {
      type: 'image/jpeg' || 'image/png'
    };
    this.file = new File([data], 'lynna', metadata);
    console.log(this.file);
  }

}
