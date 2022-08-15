import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ManteelectricoService {
  products: IProducto[] = [
    {
      codigo: '1',
      image:
        'assets/images/public/mantenimientos/electrico/mantenimientoelectricol.png',
      title:
        'Programación, ejecución, supervisión y control de los sistemas eléctricos ',
    },
  ];
  constructor() {}
  geAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find((item) => id == item.codigo);
  }
}
