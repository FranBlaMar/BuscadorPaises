import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerPaisService } from '../../services/ver-pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [".small-flag { width: 50px;} .mr-1 {margin-right: 5px;}"]
})
export class VerPaisComponent implements OnInit {

  get paises(){
    return this.servicio.resultadosBusqueda;
    
  }

  constructor(private route: ActivatedRoute, private servicio: VerPaisService) {
    console.log(route.snapshot.params['id']);
  }

  

  ngOnInit(): void {
  }

}
