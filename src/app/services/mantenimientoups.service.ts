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
      title: 'Mantenimiento UPS 1',
      },
    {
      codigo: '2',
      image: 'assets/images/public/mantenimientos/Imag 14.jpg',
      title: 'Mantenimiento UPS 2',
    },
    {
      codigo: '3',
      image: 'assets/images/public/mantenimientos/Imag 15.jpg',
      title: 'Mantenimiento UPS 3',
    },
    {
      codigo: '4',
      image: 'assets/images/public/mantenimientos/Imag 16.jpg',
      title: 'Mantenimiento UPS 4',
      },
    {
      codigo: '5',
      image: 'assets/images/public/mantenimientos/Imag 17.jpg',
      title: 'Mantenimiento UPS 5',
     },
    {
      codigo: '6',
      image: 'assets/images/public/mantenimientos/Imag 18.jpg',
      title: 'Mantenimiento UPS 6',
     },
    {
      codigo: '7',
      image: 'assets/images/public/mantenimientos/Imag 19.jpg',
      title: 'Mantenimiento UPS 7',
     },
    {
      codigo: '8',
      image: 'assets/images/public/mantenimientos/Imag 18.jpg',
      title: 'Mantenimiento UPS 8',
     },
    {
      codigo: '9',
      image: 'assets/images/public/mantenimientos/Imag 19.jpg',
      title: 'Mantenimiento UPS 9',
     },
    {
      codigo: '10',
      image: 'assets/images/public/mantenimientos/Imag 20.jpg',
      title: 'Mantenimiento UPS 10',
      },
    {
      codigo: '11',
      image: 'assets/images/public/mantenimientos/Imag 21.jpg',
      title: 'Mantenimiento UPS 11',
      },
    {
      codigo: '12',
      image: 'assets/images/public/mantenimientos/Imag 22.jpg',
      title: 'Mantenimiento UPS 12',
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
