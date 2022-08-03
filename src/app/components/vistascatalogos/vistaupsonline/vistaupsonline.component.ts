import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { UpsonlineService } from 'src/app/services/upsonline.service';

@Component({
  selector: 'app-vistaupsonline',
  templateUrl: './vistaupsonline.component.html',
  styleUrls: ['./vistaupsonline.component.css'],
})
export class VistaupsonlineComponent implements OnInit {
  upsonline: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioupsonline: UpsonlineService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.upsonline = this.servicioupsonline.getProduct(id);
  }
}
