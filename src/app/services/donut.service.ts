import { Injectable } from '@angular/core';
import { DonutList, Donuts, Donut } from '../donuts'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonutService {

  apiURL = 'https://grandcircusco.github.io/demo-apis/';

  constructor(private http:HttpClient) { }

  getDonutList() {
    return this.http.get<DonutList>(`${this.apiURL}donuts.json`);
  }

  getDonut(url:string){
    return this.http.get<Donut>(url);
  }

}
