import { Component, OnInit } from '@angular/core';
import { VerPaisService } from '../../services/ver-pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  pais: String = "";
  constructor(private servicio: VerPaisService) { }

  ngOnInit(): void {
  }

  buscarPais(){
    this.servicio.buscarPais(this.pais);
    this.pais = "";
  }
}
