import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class UpsonlineService {
  products: IProducto[] = [
    {
      codigo: '1',
      image:
        'assets/images/public/ups 1kva 2kva 3kva online 110 v/sistemas-ininterrumpidos-monofasico-1-10-kva.jpg',
      title: 'UPS online 1',
  },
    {
      codigo: '2',
      image:
        'assets/images/public/ups 1kva 2kva 3kva online 220 v/POWEST-TITAN-3-kva-220.jpg',
      title: 'UPS online 2',
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
