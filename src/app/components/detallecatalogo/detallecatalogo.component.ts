import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/Productos';
import { Bateria } from 'src/app/models/Baterias';

import { ProductsService } from '../../services/products.service';
import { IProducto } from 'src/app/interfaces/inproducto';

@Component({
  selector: 'app-detallecatalogo',
  templateUrl: './detallecatalogo.component.html',
  styleUrls: ['./detallecatalogo.component.css'],
})
export class DetallecatalogoComponent implements OnInit {
  bateria: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioProductos: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];

    this.bateria = this.servicioProductos.getProduct(id);

    /*    this.servicioProductos.disparadorDeProductos.subscribe((bateria) => {
      this.baterias = bateria;
      // console.log('Recibiendo data..', data);

      console.log('Datos en ArrayList', this.baterias);
    }); */
  }
}
