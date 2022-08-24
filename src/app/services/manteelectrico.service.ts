import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ManteelectricoService {
  products: IProducto[] = [
    // {
    //   codigo: '1',
    //   image:
    //     'assets/images/public/mantenimientos/electrico/mantenimientoelectricol.png',
    //   title:
    //     'Programación, ejecución, supervisión y control de los sistemas eléctricos ',
    // },
    {
      codigo: '2',
      image:
        'assets/images/public/mantenimientoelectrico/WhatsApp Imag 46.jpg',
      title:
        'Foto 2',
    },
    {
      codigo: '3',
      image:
        'assets/images/public/mantenimientoelectrico/WhatsApp Imag 47.jpg',
      title:
        'Foto 3',
    },
    {
      codigo: '4',
      image:
        'assets/images/public/mantenimientoelectrico/WhatsApp Imag 48.jpg',
      title:
        'Foto 4',
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
