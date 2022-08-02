import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos';

@Component({
  selector: 'app-upsonline',
  templateUrl: './upsonline.component.html',
  styleUrls: ['./upsonline.component.css']
})
export class UpsonlineComponent implements OnInit {

  public upsonlines : Array<Producto>=new Array<Producto>();

  constructor() { 
    this.upsonlines =[
      new Producto("1","UPS Online 1","assets/images/public/ups 1kva 2kva 3kva online 110 v/sistemas-ininterrumpidos-monofasico-1-10-kva.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "), 
      new Producto("2","UPS Online 2","assets/images/public/ups 1kva 2kva 3kva online 220 v/POWEST-TITAN-3-kva-220.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
      
    ]
  }

  ngOnInit(): void {
  }

}
