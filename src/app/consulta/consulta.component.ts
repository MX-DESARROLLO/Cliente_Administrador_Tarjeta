import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { Router, ActivatedRoute } from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Base64 } from 'js-base64';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  id = '';
  tarjeta;
  clima
  final

  constructor(private router: Router, private route: ActivatedRoute, private climaService: ClimaService  ){
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //console.log(this.id);
    //console.log(atob(this.id));
    //this.getClima(this.route.snapshot.paramMap.get('id'));
    this.getClima(atob(this.id));
    this.tarjeta = atob(this.id);

    
    

  }
  
  getClima(pais: string){
    this.climaService.getClima(pais)
      .subscribe(
        data => {
          this.clima = data;
          
          
          var matriz = {};
          this.clima.forEach(function(registro) { 
            var pais = registro["TIPO"];
            matriz[pais] = matriz[pais] ? (matriz[pais] + 1) : 1;
          });
          
          // luego puedes usar la primera matriz, para crear el arreglo con tu formato necesitado.
          matriz = Object.keys(matriz).map(function(pais) {
             return { nombre: pais, cant: matriz[pais] };
          });
          this.final = matriz;
          


        },
        err => console.log(err)
      )
  }

    
  
  
  

 
 

  submitLocation(pais: HTMLInputElement){
    if (pais.value) {
      this.getClima(pais.value);
      console.log(pais.value);
      pais.value = '';
    } else {
      alert('Ingrese Pais..!!');
    }
    
    pais.focus();
    return false;
  }


}
