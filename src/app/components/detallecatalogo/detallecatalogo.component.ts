import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/Productos';
import { Bateria } from 'src/app/models/Baterias';

import { ProductsService } from './../../products.service';

@Component({
  selector: 'app-detallecatalogo',
  templateUrl: './detallecatalogo.component.html',
  styleUrls: ['./detallecatalogo.component.css'],
})
export class DetallecatalogoComponent implements OnInit {
  // product: Producto = {} as Producto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioProductos: ProductsService
  ) {}
  public listabaterias: Array<any> = [];

  ngOnInit(): void {
    this.servicioProductos.disparadorDeProductos.subscribe((data) => {
      console.log('Recibiendo data..', data);
      this.listabaterias.push(data);
      console.log('Datos en ArrayList', this.listabaterias);
    });
  }
}
