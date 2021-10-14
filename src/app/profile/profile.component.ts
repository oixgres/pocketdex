import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cols:number = 0;

  constructor() { }

  ngOnInit(): void {
    window.innerWidth > 900 ? this.cols = 2: this.cols=1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    event.target.innerWidth > 900 ? this.cols = 2 : this.cols=1;
  }


}
