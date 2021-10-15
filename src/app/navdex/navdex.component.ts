import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navdex',
  templateUrl: './navdex.component.html',
  styleUrls: ['./navdex.component.scss']
})
export class NavdexComponent implements OnInit {
  pos:number = 0;
  input:string = '';

  constructor(private actRouter:ActivatedRoute, private router:Router) {
    this.actRouter.params.subscribe(
      params =>{
        this.pos = params['id'];
      }
    )
  }

  ngOnInit(): void {
  }

  onKey(event:any){
    this.input += event.target.value;
  }

  find(){
    if(this.input !== '' || this.input !== null){
      this.router.navigateByUrl(`/pocketmon/${this.input}`);
      this.input = ''
    }
  }

  prev(){
    this.pos--;

    if(this.pos < 1)
      this.pos = 898;

    this.router.navigateByUrl(`/pocketmon/${this.pos}`);
  }

  next(){
    this.pos++;

    if(this.pos > 898)
      this.pos = 1;

    this.router.navigateByUrl(`/pocketmon/${this.pos}`);
  }

}
