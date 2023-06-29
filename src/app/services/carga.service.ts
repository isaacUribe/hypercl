import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  constructor(public servicio:HttpClient) { }
  public registrarCarga(datosCarga:any):Observable<any>{
    let url = "http://localhost:8080/api/v1/mercancia"
    return this.servicio.post(url, datosCarga)
  }
  public buscarCarga():Observable<any>{
    let url = "http://localhost:8080/api/v1/mercancia"
    return this.servicio.get(url)
  }

}
