import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cols:number = 0;
  rows:string = '';

  constructor() { }

  ngOnInit(): void {
    this.calcCols(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.calcCols(event.target.innerWidth);
  }

  calcCols(width:number){
    if(width > 800){
      this.cols = 2;
      this.rows = '1:1.3';
    }
    else{
      this.cols = 1;
      this.rows = '1:1'
    }
  }


}
