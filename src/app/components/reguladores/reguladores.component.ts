import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { Producto } from 'src/app/models/Productos';
import { ReguladoresService } from 'src/app/services/reguladores.service';

@Component({
  selector: 'app-reguladores',
  templateUrl: './reguladores.component.html',
  styleUrls: ['./reguladores.component.css'],
})
export class ReguladoresComponent implements OnInit {
  public reguladores: IProducto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioReguladores: ReguladoresService
  ) {}

  ngOnInit(): void {
    this.reguladores = this.servicioReguladores.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/vistareguladores', id]);
  }
}
