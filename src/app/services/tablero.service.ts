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
      title: 'Tablero by pass 1',
    },
    {
      codigo: '2',
      image: 'assets/images/public/tableros/Imag 26.jpg',
      title: 'Tablero by pass 2',
   },
    {
      codigo: '3',
      image: 'assets/images/public/tableros/Imag 27.jpg',
      title: 'Tablero by pass 3',
    },
    {
      codigo: '4',
      image: 'assets/images/public/tableros/Imag 28.jpg',
      title: 'Tablero by pass 4',
    },
    {
      codigo: '5',
      image: 'assets/images/public/tableros/Imag 29.jpg',
      title: 'Tablero by pass 5',
   },
    {
      codigo: '6',
      image: 'assets/images/public/tableros/Imag 30.jpg',
      title: 'Tablero by pass 6',
   },
    {
      codigo: '7',
      image: 'assets/images/public/tableros/Imag 31.jpg',
      title: 'Tablero by pass 7',
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
