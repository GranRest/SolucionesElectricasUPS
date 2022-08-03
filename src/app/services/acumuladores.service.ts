import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class AcumuladoresService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/reguladores/REGULADOR POWEST 23.jpg',
      title: 'Acumulador 1',
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
