import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ManteelectricoService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'linkimg',
      title: 'NOMBRE IMG',
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
