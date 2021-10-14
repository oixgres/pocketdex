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

  constructor(private p: PokeapiService, private router:ActivatedRoute) {
    window.innerWidth > 900 ? this.cols = 2 : this.cols=1;
    
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
    event.target.innerWidth > 900 ? this.cols = 2 : this.cols=1;
    console.log('a')
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
            normal:res.abilities[0].ability.name,
            secret:res.abilities[1].ability.name,
          },
          sprites:[
            res.sprites.front_default,
            res.sprites.back_default,
            res.sprites.front_shiny,
            res.sprites.back_shiny
          ],
          stats: {
            hp:res.stats[0].base_stat,
            attack: res.stats[1].base_stat,
            defense: res.stats[2].base_stat,
            spatk:res.stats[3].base_stat,
            spdef:res.stats[4].base_stat,
            speed:res.stats[5].base_stat,
          }
        }
      },
      err=>{
        console.log(err);
      }
    )
  }

  getPokemonDexInfo(dex:number){
    this.p.getDexEntry(dex).subscribe(
      res=>{
        this.pokemon += {
          entry: res.flavor_text_entries[0].flavor_text,
          gen: res.generation.name,
          growth: res.growth_rate.name,
          
        }
      }
    )
  }

}
