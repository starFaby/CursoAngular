import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-productoslist',
  templateUrl: './productoslist.component.html',
  styleUrls: ['./productoslist.component.scss']
})
export class ProductoslistComponent implements OnInit { 
  productos: any = [];
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.onGetProductos();
  }
  onGetProductos(){
    this.productos = this.productosService.productos.rows;
    console.log(this.productos);
  }
}
