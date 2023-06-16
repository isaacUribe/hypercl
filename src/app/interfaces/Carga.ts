import { Zona } from "./Zona";

export interface Carga{
    id:number,
    nombre:string,
    descripcion:string,
    fecha:Date,
    motivoDevolucion:string,
    volumenOcupa:number
    // zona:Zona
}