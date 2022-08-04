import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class TableroService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/tableros/Imag 25.jpg',
      title: 'FOTO 1',
    },
    {
      codigo: '2',
      image: 'assets/images/public/tableros/Imag 26.jpg',
      title: 'FOTO 2',
   },
    {
      codigo: '3',
      image: 'assets/images/public/tableros/Imag 28.jpg',
      title: 'FOTO 3',
    },
    {
      codigo: '4',
      image: 'assets/images/public/tableros/Imag 31.jpg',
      title: 'FOTO 4',
   },
    {
      codigo: '5',
      image: 'assets/images/public/tableros/Imag 29.jpg',
      title: 'FOTO 5',
   },
   {
    codigo: '6',
    image: 'assets/images/public/tableros/Imag 27.jpg',
    title: 'FOTO 6',
  },
    {
      codigo: '7',
      image: 'assets/images/public/tableros/Imag 30.jpg',
      title: 'FOTO 7',
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
