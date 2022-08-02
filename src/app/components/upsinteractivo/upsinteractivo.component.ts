import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos';

@Component({
  selector: 'app-upsinteractivo',
  templateUrl: './upsinteractivo.component.html',
  styleUrls: ['./upsinteractivo.component.css']
})
export class UpsinteractivoComponent implements OnInit {

  public upsinteractivos : Array<Producto>=new Array<Producto>();

  constructor() { 
    this.upsinteractivos =[
      new Producto("1","UPS Interactivo 1","assets/images/public/UPS INTERACTIVOS DE 500 VA A 2000VA/UPS POWEST MICRONET 1000-2000 VA.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "), 
 
    ]
  }

  ngOnInit(): void {
  }

}
