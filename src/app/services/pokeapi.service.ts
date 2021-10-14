import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pocketURL = environment.pokeApiUrl;
  
  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<any>(`${this.pocketURL}pokemon/?&limit=50/`);
  }

  getData(dex:number){
    return this.http.get<any>(`${this.pocketURL}pokemon/${dex}`);
  }

  getDexEntry(dex:number){
    return this.http.get<any>(`${this.pocketURL}pokemon-species/${dex}`);
  }
}
