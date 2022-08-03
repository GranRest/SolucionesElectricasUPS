import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ReguladoresService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/reguladores/REGULADOR POWEST 23.jpg',
      title: 'Regulador 1',
    },
    {
      codigo: '2',
      image: 'assets/images/public/reguladores/REGULADORES 24.jpg',
      title: 'NOMBRE OFICIAL ',
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
