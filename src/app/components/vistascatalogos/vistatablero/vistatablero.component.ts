import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { TableroService } from 'src/app/services/tablero.service';

@Component({
  selector: 'app-vistatablero',
  templateUrl: './vistatablero.component.html',
  styleUrls: ['./vistatablero.component.css'],
})
export class VistatableroComponent implements OnInit {
  tablero: IProducto;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioTablero: TableroService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.tablero = this.servicioTablero.getProduct(id);
  }
}
