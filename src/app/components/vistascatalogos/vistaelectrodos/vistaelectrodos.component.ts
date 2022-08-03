import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';

import { ElectrodosServiceService } from '../../../services/electrodos.service.service';

@Component({
  selector: 'app-vistaelectrodos',
  templateUrl: './vistaelectrodos.component.html',
  styleUrls: ['./vistaelectrodos.component.css'],
})
export class VistaelectrodosComponent implements OnInit {
  electrodos: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private electrodosservices: ElectrodosServiceService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.electrodos = this.electrodosservices.getProduct(id);
  }
}
