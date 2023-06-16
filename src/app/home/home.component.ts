import { Component } from '@angular/core';
import { Carga } from '../interfaces/Carga';
import { compileNgModule } from '@angular/compiler';
import { CargaService } from '../services/carga.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cargamento:Carga[]=[]


  constructor(public peticion:CargaService){
    this.peticion.buscarCarga().subscribe((respuesta)=>{
      console.log(respuesta)
      this.cargamento=respuesta
    })
    
  }
}
