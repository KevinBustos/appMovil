import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  titulo='Clima';
  isNotLogin = true;

  constructor() { }

  ngOnInit() {
  }

}
