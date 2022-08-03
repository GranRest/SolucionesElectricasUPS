import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { MantenimientoupsService } from 'src/app/services/mantenimientoups.service';

@Component({
  selector: 'app-vistamanteniups',
  templateUrl: './vistamanteniups.component.html',
  styleUrls: ['./vistamanteniups.component.css'],
})
export class VistamanteniupsComponent implements OnInit {
  upsmantenimiento: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciomanteups: MantenimientoupsService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.upsmantenimiento = this.serviciomanteups.getProduct(id);
  }
}
