import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { Producto } from 'src/app/models/Productos';
import { ElectrodosServiceService } from 'src/app/services/electrodos.service.service';

@Component({
  selector: 'app-electrodos',
  templateUrl: './electrodos.component.html',
  styleUrls: ['./electrodos.component.css'],
})
export class ElectrodosComponent implements OnInit {
  public electrodos: IProducto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioElectrodos: ElectrodosServiceService
  ) {}

  ngOnInit(): void {
    this.electrodos = this.servicioElectrodos.geAllProducts();
  }

  redireccionamientoe(id: any) {
    this._router.navigate(['/vistaelectrodos/', id]);
  }
}
