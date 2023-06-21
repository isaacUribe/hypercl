import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { CargaService } from '../services/carga.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formulario:FormGroup
  public constructor(
    public fabricaFormulario:FormBuilder,
    public servicioCarga:CargaService
    ){
    this.formulario=this.inicializarFormulario()
  }
  public inicializarFormulario():FormGroup{
    return this.fabricaFormulario.group({
      nombre:[''],
      descripcion:[''],
      fechaEntrega:[''],
      motivoDevolucion:[''],
      volumenOcupa:[''],
      zona:['']
    })
  }
  public capturarDatos():void{
    let datosCarga = this.formulario.value
    this.servicioCarga.registrarCarga(datosCarga)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
  }

}
