import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { MantecamarasService } from 'src/app/services/mantecamaras.service';

@Component({
  selector: 'app-vistamantecamaras',
  templateUrl: './vistamantecamaras.component.html',
  styleUrls: ['./vistamantecamaras.component.css'],
})
export class VistamantecamarasComponent implements OnInit {
  camara: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioCamaras: MantecamarasService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.camara = this.servicioCamaras.getProduct(id);
  }
}
