import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/inproducto';
import { ReguladoresService } from 'src/app/services/reguladores.service';

@Component({
  selector: 'app-vistareguladores',
  templateUrl: './vistareguladores.component.html',
  styleUrls: ['./vistareguladores.component.css'],
})
export class VistareguladoresComponent implements OnInit {
  regulador: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioReguladores: ReguladoresService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.regulador = this.servicioReguladores.getProduct(id);
  }
}
