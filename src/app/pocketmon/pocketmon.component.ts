import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pocketmon',
  templateUrl: './pocketmon.component.html',
  styleUrls: ['./pocketmon.component.scss']
})
export class PocketmonComponent implements OnInit {
  pokemon:any;
  cols:number = 1;
  rows:string = '';
  stats = [
    { name:'HP',maxValue:255,},
    { name:'ATTACK',maxValue:181,},
    { name:'DEF',maxValue:230,},
    { name:'SPECIAL ATTACK',maxValue:173,},
    { name:'SPECIAL DEFENSE',maxValue:230,},
    { name:'SPEED',maxValue:200,},
  ]

  constructor(private p: PokeapiService, private router:ActivatedRoute) {
    this.calcCols(window.innerWidth);
    
    this.router.params.subscribe(
        params =>{
          this.getPokemonData(params['id']);
        }
    );
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.calcCols(event.target.innerWidth);
  }
  
  calcCols(width:number){
    if(width > 800){
      this.cols = 2;
      this.rows ='1:1.3';
    }
    else{
      this.cols = 1;
      this.rows = '1:1.2';
    }
  }

  getPokemonData(dex:number){ 
    this.p.getData(dex).subscribe(
      res=>{
        this.pokemon = {
          dex:res.id,
          name:res.name,
          height:res.height,
          type:{
            primary: res.types[0].type.name,
            secondary: res.types[1] ? res.types[1].type.name : null
          },
          abilities:{
            normal:res.abilities[0] ? res.abilities[0].ability.name : null,
            secret:res.abilities[1] ? res.abilities[1].ability.name : null,
          },
          sprites:[
            res.sprites.front_default,
            res.sprites.back_default,
            res.sprites.front_shiny,
            res.sprites.back_shiny
          ],
          stats: [
            res.stats[0].base_stat,
            res.stats[1].base_stat,
            res.stats[2].base_stat,
            res.stats[3].base_stat,
            res.stats[4].base_stat,
            res.stats[5].base_stat,
          ],
          extra:null
        }

        this.getPokemonDexInfo(dex);
        console.log(this.pokemon)
      },
      err=>{
        console.log(err);
      }
    )
  }

  getPokemonDexInfo(dex:number){

    this.p.getDexEntry(dex).subscribe(
      res=>{
        this.pokemon.extra={
          entry: res.flavor_text_entries[0].flavor_text,
          gen: res.generation.name,
          growth: res.growth_rate.name,
          egg: {
            group1: res.egg_groups[0] ? res.egg_groups[0].name : null,
            group2: res.egg_groups[1] ? res.egg_groups[1].name : null,
          },          
        }
        console.log(this.pokemon);
      }
    )
  }

  calcStatPercent(item:any, divisor:any):number{
    return item/divisor;
  }
}
