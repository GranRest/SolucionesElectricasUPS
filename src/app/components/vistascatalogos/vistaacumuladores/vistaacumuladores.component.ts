import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { AcumuladoresService } from 'src/app/services/acumuladores.service';

@Component({
  selector: 'app-vistaacumuladores',
  templateUrl: './vistaacumuladores.component.html',
  styleUrls: ['./vistaacumuladores.component.css'],
})
export class VistaacumuladoresComponent implements OnInit {
  acumulador: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciosAcumuladores: AcumuladoresService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.acumulador = this.serviciosAcumuladores.getProduct(id);
  }
}
