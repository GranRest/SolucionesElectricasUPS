import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { UpsinteractivoService } from 'src/app/services/upsinteractivo.service';

@Component({
  selector: 'app-vistaupsinteractivo',
  templateUrl: './vistaupsinteractivo.component.html',
  styleUrls: ['./vistaupsinteractivo.component.css'],
})
export class VistaupsinteractivoComponent implements OnInit {
  upsinteractivo: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioupsinteractivo: UpsinteractivoService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.upsinteractivo = this.servicioupsinteractivo.getProduct(id);
  }
}
