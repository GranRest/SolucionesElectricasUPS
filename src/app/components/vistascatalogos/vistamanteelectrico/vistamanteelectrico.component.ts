import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { ManteelectricoService } from 'src/app/services/manteelectrico.service';

@Component({
  selector: 'app-vistamanteelectrico',
  templateUrl: './vistamanteelectrico.component.html',
  styleUrls: ['./vistamanteelectrico.component.css'],
})
export class VistamanteelectricoComponent implements OnInit {
  manteelectrico: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciomanteelec: ManteelectricoService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.manteelectrico = this.serviciomanteelec.getProduct(id);
  }
}
