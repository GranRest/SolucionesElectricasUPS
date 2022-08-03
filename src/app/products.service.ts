import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from './models/Productos';
import { IProducto } from './interfaces/inproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  @Output() disparadorDeProductos: EventEmitter<any> = new EventEmitter();

  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/baterias/6V-1.2AH-1-300x300.jpg',
      title: 'Bateria 1',
      descripcion:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      codigo: '2',
      image: 'assets/images/public/baterias/6V-4AH-1-300x300.jpg',
      title: 'Bateria 2',
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
