import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../models/Productos';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  @Output() disparadorDeProductos: EventEmitter<any> = new EventEmitter();

  baterias: IProducto[] = [
    {
      codigo: '1',
      image: 'assets/images/public/baterias/6V-1.2AH-20HR.jpg',
      title: '6V-1.2AH-20HR',
      },
    {
      codigo: '2',
      image: 'assets/images/public/baterias/6V-4AH-20HR.jpg',
      title: '6V-4AH-20HR',
      },
    {
      codigo: '3',
      image: 'assets/images/public/baterias/12V-5AH-20HR.jpg',
      title: '12V-5AH-20HR',
      },
    {
      codigo: '4',
      image: 'assets/images/public/baterias/12V-7.5AH-20HR.jpg',
      title: '12V-7.5AH-20HR',
    },
    {
      codigo: '5',
      image: 'assets/images/public/baterias/12V-9AH-20HR.jpg',
      title: '12V-9AH-20HR',
      },
    {
      codigo: '6',
      image: 'assets/images/public/baterias/12V-12AH-20HR.jpg',
      title: '12V-12AH-20HR',
     },
     {
      codigo: '7',
      image: 'assets/images/public/baterias/12V-18AH-20HR.jpg',
      title: '12V-18AH-20HR',
      },
    {
      codigo: '8',
      image: 'assets/images/public/baterias/12V-26AH-20HR.jpg',
      title: '12V-26AH-20HR',
     },
    {
      codigo: '9',
      image: 'assets/images/public/baterias/12V-35AH-20HR.jpg',
      title: '12V-35AH-20HR',
     },
    {
      codigo: '10',
      image: 'assets/images/public/baterias/12V-40AH-20HR.jpg',
      title: '12V-40AH-20HR',
      },
    {
      codigo: '11',
      image: 'assets/images/public/baterias/12V-65AH-20HR.jpg',
      title: '12V-65AH-20HR',
      },
  ];

  constructor() {}

  getAllBaterias() {
    return this.baterias;
  }
  getBateria(id: string) {
    return this.baterias.find((item) => id == item.codigo);
  }

}
