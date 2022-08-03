import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { ManteelectricoService } from 'src/app/services/manteelectrico.service';

@Component({
  selector: 'app-mantenielec',
  templateUrl: './mantenielec.component.html',
  styleUrls: ['./mantenielec.component.css'],
})
export class MantenielecComponent implements OnInit {
  public manteelectrico: IProducto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private serviciomanteelec: ManteelectricoService
  ) {}

  ngOnInit(): void {
    this.manteelectrico = this.serviciomanteelec.geAllProducts();
  }
  redireccionamiento(id: any) {
    this._router.navigate(['/detallemanteelec/', id]);
  }
}
