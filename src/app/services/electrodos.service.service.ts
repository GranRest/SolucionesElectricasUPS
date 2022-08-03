import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ElectrodosServiceService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/electrodos/electrodo1.jpg',
      title: 'Electrodo 1',
      },
    {
      codigo: '2',
      image: 'assets/images/public/electrodos/electrodo2.jpeg',
      title: 'Electrodo 2',
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
