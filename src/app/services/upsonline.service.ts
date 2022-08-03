import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/inproducto';

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
      descripcion:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      codigo: '2',
      image:
        'assets/images/public/ups 1kva 2kva 3kva online 220 v/POWEST-TITAN-3-kva-220.jpg',
      title: 'UPS online 2',
      descripcion:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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
