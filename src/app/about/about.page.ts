import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  titulo='About';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  gotokevin(){
    this.router.navigate(['/kevin'])
  }

  gotonicolas(){
    this.router.navigate(['/nicolas'])
  }

  gotojavier(){
    this.router.navigate(['/javier'])
  }

  gotodavid(){
    this.router.navigate(['/david'])
  }

}
