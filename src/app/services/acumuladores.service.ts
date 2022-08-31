import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class AcumuladoresService {
  products: IProducto[] = [
    // {
    //   codigo: '1',
    //   image: 'assets/images/public/acumuladores/ups.png',
    //   title: 'Acumulador 1',
    // },
    {
      codigo: '2',
      image: 'assets/images/public/acumuladores/ups3.jpg',
      title: 'Acumulador 2',
    },
    {
      codigo: '3',
      image: 'assets/images/public/acumuladores/ups2.jpg',
      title: 'Acumulador 3',
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
