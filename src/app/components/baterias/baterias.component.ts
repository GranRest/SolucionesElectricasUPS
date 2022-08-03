import { Component, OnInit } from '@angular/core';
import { Bateria } from 'src/app/models/Baterias';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProducto } from 'src/app/interfaces/inproducto';

@Component({
  selector: 'app-baterias',
  templateUrl: './baterias.component.html',
  styleUrls: ['./baterias.component.css'],
})
export class BateriasComponent implements OnInit {
  public baterias: IProducto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioProductos: ProductsService
  ) {}

  ngOnInit(): void {
    this.baterias = this.servicioProductos.geAllProducts();
  }
  //Creacion de redireccionamiento desde el Baterias al DetalleVista
  redireccionamiento(id: any) {
    this._router.navigate(['/detallecatalogo/', id]);
  }
  ngDoCheck(): void {}
  ngOnDestroy(): void {}
}
