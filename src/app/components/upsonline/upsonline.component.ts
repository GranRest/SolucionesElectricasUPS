import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/inproducto';
import { Producto } from 'src/app/models/Productos';
import { UpsonlineService } from 'src/app/services/upsonline.service';

@Component({
  selector: 'app-upsonline',
  templateUrl: './upsonline.component.html',
  styleUrls: ['./upsonline.component.css'],
})
export class UpsonlineComponent implements OnInit {
  public upsonlines: IProducto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private upsonlineservice: UpsonlineService
  ) {}

  ngOnInit(): void {
    this.upsonlines = this.upsonlineservice.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detalleupsonline/', id]);
  }
}
