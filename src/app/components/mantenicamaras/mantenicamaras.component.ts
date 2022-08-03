import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { MantecamarasService } from 'src/app/services/mantecamaras.service';

@Component({
  selector: 'app-mantenicamaras',
  templateUrl: './mantenicamaras.component.html',
  styleUrls: ['./mantenicamaras.component.css'],
})
export class MantenicamarasComponent implements OnInit {
  public mantecamaras: IProducto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciomantecamaras: MantecamarasService
  ) {}

  ngOnInit(): void {
    this.mantecamaras = this.serviciomantecamaras.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detallemantecamaras/', id]);
  }
}
