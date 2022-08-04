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
      title: '1/2/3 Kva Online 110 Vac',
    },
    {
      codigo: '2',
      image:
        'assets/images/public/ups 1kva 2kva 3kva online 220 v/POWEST-TITAN-3-kva-220.jpg',
      title: '1/2/3 Kva Online 220 Vac',
    },
    {
      codigo: '3',
      image:
        'assets/images/public/ups 6 kva y 10 kva bifasico/POWEST-TITAN-BIFASICO-6-10-KVA.jpg',
      title: 'Bifásicos Online 6/10 KVA',
    },
    {
      codigo: '4',
      image:
        'assets/images/public/ups 10 kva , 15 kva trifasico/10-30-kva-UL.jpg',
      title: 'Trifásicos Online 10/15/20 KVA UL',
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
