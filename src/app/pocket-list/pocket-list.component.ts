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
  dex:number=0;
  pkmnShwon:number= 0;
  
  cols:number = 0;
  rows:string = '';

  yoffset:number = 0;
  stopDex:boolean = false;

  constructor(private p:PokeapiService, private router:Router) { }

  ngOnInit(): void {
    this.calcCols(window.innerWidth);
    this.getPokemon();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.calcCols(event.target.innerWidth);
  }


  @HostListener('window:scroll', ['$event']) 
  onScroll(event:any) {
    let limit = 50;

    console.log(window.pageYOffset)

    if((window.pageYOffset - this.yoffset) > 3600){
      //console.log('*** scroll *** ')
      this.yoffset += 3600;
      
      if(this.pkmnShwon >= 800){
        this.pkmnShwon+=50;
        limit = 48;
      }
      else
        this.pkmnShwon += 50;
  
      if(!this.stopDex){
        if(limit==48)
          this.stopDex=true;

        this.p.getPokemon(limit, this.pkmnShwon)
            .subscribe(
              res =>{
                res.results.forEach((result:any) => {
                  this.pokemon.push({
                    dex: this.dex+1,
                    name: result.name,
                    data: result.url,
                    sprite: ''
                  })
                  this.getSprite(this.dex++);
                });
              },
              err =>{
                console.log(err);
              }
            )
      }
    }
  }

  calcCols(width:number){
    if(width >= 1200){
      this.cols = 5;
      this.rows = '1:1.5';
    }
    else
      if(width >= 1000){
        this.cols = 4;
        this.rows = '1:1.4'
      }
      else
        if(width >=800){
          this.cols = 3;
          this.rows = '1:1.3'
        }
        else
          if(width>= 500){
            this.cols = 2;
            this.rows = '1:1.4'
          }
          else{
            this.cols = 1;
            this.rows='1:0.9'
          }
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
    this.p.getPokemon(50, 0)
      .subscribe(
        res =>{
          res.results.forEach((result:any) => {
            this.pokemon.push({
              dex: this.dex+1,
              name: result.name,
              data: result.url,
              sprite: ''
            })
            this.getSprite(this.dex++);
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
  expandButton(){
    
  }
}
