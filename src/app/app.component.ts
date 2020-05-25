import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service'; 
//import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //id = '';
  //clima
  /*constructor(private router: Router, private route: ActivatedRoute, private climaService: ClimaService  ){
    
  }
*/
 
  
  title = 'consulta-QR';

  
  ngOnInit() {
    //this.id = this.route.snapshot.paramMap.get('id');
  }

  /*
  getClima(pais: string){
    
    this.climaService.getClima(pais)
      .subscribe(
        data => {
          console.log(data);
          this.clima = data;
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

 */

}
