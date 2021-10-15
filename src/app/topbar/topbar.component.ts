import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  row:number = 0;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.calcRow(event.target.innerWidth);
  }


  calcRow(innerWidth: number) {
  }


  public profile(){
    this.router.navigateByUrl('/profile');   
  }

  public pklist(){
    this.router.navigateByUrl('/');
  }

}
