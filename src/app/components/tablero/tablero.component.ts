import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/inproducto';
import { Producto } from 'src/app/models/Productos';
import { TableroService } from 'src/app/services/tablero.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  public tableros: IProducto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private servicioTableros: TableroService
  ) {}

  ngOnInit(): void {
    this.tableros = this.servicioTableros.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detalletablero/', id]);
  }
}
