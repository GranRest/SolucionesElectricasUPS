import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class MantenimientoupsService {
  products: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/mantenimientos/Imag 13.jpg',
      title: 'FOTO 1',
    },
    {
      codigo: '2',
      image: 'assets/images/public/mantenimientos/Imag 20.jpg',
      title: 'FOTO 2',
    },
    {
      codigo: '3',
      image: 'assets/images/public/mantenimientos/Imag 17.jpg',
      title: 'FOTO 3',
    },
    {
      codigo: '4',
      image: 'assets/images/public/mantenimientos/Imag 21.jpg',
      title: 'FOTO 4',
    },
    {
      codigo: '5',
      image: 'assets/images/public/mantenimientos/Imag 14.jpg',
      title: 'FOTO 5',
    },
    {
      codigo: '6',
      image: 'assets/images/public/mantenimientos/Imag 18.jpg',
      title: 'FOTO 6',
    },
    {
      codigo: '7',
      image: 'assets/images/public/mantenimientos/Imag 19.jpg',
      title: 'FOTO 7',
    },
    {
      codigo: '8',
      image: 'assets/images/public/mantenimientos/Imag 22.jpg',
      title: 'FOTO 8',
    },
    {
      codigo: '9',
      image: 'assets/images/public/mantenimientos/Imag 15.jpg',
      title: 'FOTO 9',
    },
    {
      codigo: '10',
      image: 'assets/images/public/mantenimientos/Imag 16.jpg',
      title: 'FOTO 10',
    },

  ];
  constructor() { }
  geAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find((item) => id == item.codigo);
  }
}
