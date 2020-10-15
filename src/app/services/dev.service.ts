import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devs } from '../devs';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  apiURL = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor( private http:HttpClient) { }

  getDevs(){
    return this.http.get<Devs>(this.apiURL);
  }
}
