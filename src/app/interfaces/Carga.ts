import { Zona } from "./Zona";

export interface Carga{
    id:number,
    nombre:string,
    tipoCarga:string,
    pesoCarga:number,
    alto:number,
    largo:number,
    ancho:number,
    zona:Zona
}