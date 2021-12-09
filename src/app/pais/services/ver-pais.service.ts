import { Injectable } from '@angular/core';
import { APIPais } from '../interfaces/apiPaises.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerPaisService {
  private servicioUrl: string = "https://restcountries.com/v3.1/name/";
  public resultadosBusqueda: APIPais[] = [];

  constructor(private http: HttpClient) { }

  get resultados(){
    return [...this.resultadosBusqueda];
  }

  buscarPais(nombrePais: String){
    this.http.get<APIPais[]>(`${ this.servicioUrl } ${nombrePais}` )
      .subscribe( ( resp ) => {
        this.resultadosBusqueda=resp;
      });
  }
}
