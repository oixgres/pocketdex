import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.scss']
})

export class PocketListComponent implements OnInit {
  pokemon :any[] = [];
  cols:number = 0;

  constructor(private p:PokeapiService, private router:Router) { }

  ngOnInit(): void {
    this.calcCols(window.innerWidth);
    this.getPokemon();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    let width = event.target.innerWidth;

    this.calcCols(width);
  }

  calcCols(width:number){
    if(width >= 1200)
      this.cols = 5;
    else
      if(width >= 1000)
        this.cols = 4;
      else
        if(width >=800)
          this.cols = 3;
        else
          if(width>= 500)
            this.cols = 2;
          else
            this.cols = 1;
  }

  getSprite(dex:number){
    
      this.p.getData(dex+1).subscribe(res=>{
        this.pokemon[dex].sprite = res.sprites.front_default;
      },
      err=>{
        console.log(err);
      });
  }

  getPokemon(){
    this.p.getPokemon()
      .subscribe(
        res =>{
          res.results.forEach((result:any, index:number) => {
            this.pokemon.push({
              dex: index+1,
              name: result.name,
              data: result.url,
              sprite: ''
            })

            this.getSprite(index);
          });
        },
        err =>{
          console.log(err);
        }
      )
  }

  pokemonData(dex:number){
    this.router.navigateByUrl(`/pocketmon/${dex}`);
  }
}
