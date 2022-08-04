import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class UpsinteractivoService {
  products: IProducto[] = [
    {
      codigo: '1',
      image:
        'assets/images/public/UPS INTERACTIVOS DE 500 VA A 2000VA/UPS POWEST MICRONET 1000-2000 VA.jpg',
      title: '500 - 2000 VA',
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
