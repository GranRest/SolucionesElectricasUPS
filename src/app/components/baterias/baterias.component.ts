import { Component, OnInit } from '@angular/core';
import { Bateria } from 'src/app/models/Baterias';
import { Router,ActivatedRoute,Params  } from '@angular/router';

@Component({
  selector: 'app-baterias',
  templateUrl: './baterias.component.html',
  styleUrls: ['./baterias.component.css']
})
export class BateriasComponent implements OnInit {
  public baterias : Array<Bateria>=new Array<Bateria>();
  constructor(private _route: ActivatedRoute, private _router:Router) {
    this.baterias =[
      new Bateria("Bateria 1 ArrayList","assets/images/public/baterias/6V-1.2AH-1-300x300.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "), 
      new Bateria("Bateria 2 ArrayList","assets/images/public/baterias/6V-4AH-1-300x300.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
      new Bateria("Bateria 3 ArrayList","assets/images/public/baterias/12-18AH-1-300x300.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
      new Bateria("Bateria 4 ArrayList","assets/images/public/baterias/12V-5AH-1-300x300.jpg","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
      
    
    
    ]


   }

  ngOnInit(): void {
  }
   //Creacion de redireccionamiento desde el Baterias al DetalleVista
   redireccionamiento(){
    this._router.navigate(['/detallecatalogo']);
  }

ngDoCheck(): void {
  
}
ngOnDestroy(): void {
  
}
}
