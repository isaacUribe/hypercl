import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formulario:FormGroup
  public constructor(public fabricaFormulario:FormBuilder){
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

  }

}
