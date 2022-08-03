import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/inproducto';
import { Producto } from 'src/app/models/Productos';
import { UpsinteractivoService } from 'src/app/services/upsinteractivo.service';

@Component({
  selector: 'app-upsinteractivo',
  templateUrl: './upsinteractivo.component.html',
  styleUrls: ['./upsinteractivo.component.css'],
})
export class UpsinteractivoComponent implements OnInit {
  public upsinteractivos: IProducto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private upsinteractivoservice: UpsinteractivoService
  ) {}

  ngOnInit(): void {
    this.upsinteractivos = this.upsinteractivoservice.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detalleupsinterac', id]);
  }
}
