import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/inproducto';
import { Producto } from 'src/app/models/Productos';
import { AcumuladoresService } from 'src/app/services/acumuladores.service';

@Component({
  selector: 'app-acumuladores',
  templateUrl: './acumuladores.component.html',
  styleUrls: ['./acumuladores.component.css'],
})
export class AcumuladoresComponent implements OnInit {
  public acumuladores: IProducto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicoAcumulador: AcumuladoresService
  ) {}

  ngOnInit(): void {
    this.acumuladores = this.servicoAcumulador.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/vistaacumulador/', id]);
  }
}
