import { Component } from '@angular/core';
import { Carga } from '../interfaces/Carga';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cargamento:Carga[]=[]

  public carga1:Carga={
    id:1,
    nombre:"Nevera",
    tipoCarga:"Delicado",
    pesoCarga:50,
    alto:175,
    largo:50,
    ancho:50,
    zona:{
      id:1,
      nombre:"zonaA",
      capacidad:1
    }
  }
  constructor(){
    this.cargamento.push(this.carga1)
    console.log(this.cargamento)
  }
}
