import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { Producto } from 'src/app/models/Productos';
import { MantenimientoupsService } from 'src/app/services/mantenimientoups.service';

@Component({
  selector: 'app-manteniups',
  templateUrl: './manteniups.component.html',
  styleUrls: ['./manteniups.component.css'],
})
export class ManteniupsComponent implements OnInit {
  public mantenimientosups: IProducto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciomanteups: MantenimientoupsService
  ) {}

  ngOnInit(): void {
    this.mantenimientosups = this.serviciomanteups.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detallemanteups/', id]);
  }
}
