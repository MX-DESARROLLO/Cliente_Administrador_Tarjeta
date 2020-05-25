import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

 
  URI: string = '';
  

  constructor(private http: HttpClient) { 
    this.URI = `https://api.munimixco.gob.gt/emixtra/api/consulta/`
  }

  getClima(country: string) {
    return this.http.get(`${this.URI}${country}`)
  }


}
