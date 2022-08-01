import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-detallecatalogo',
  templateUrl: './detallecatalogo.component.html',
  styleUrls: ['./detallecatalogo.component.css']
})
export class DetallecatalogoComponent implements OnInit {

public id: String="";

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) =>{
      console.log(params);
    });
  }
 

}
