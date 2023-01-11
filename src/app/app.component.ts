import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'paper-plane' },
    { title: 'Clima', url: 'clima', icon: 'heart' },
    { title: 'Conversor', url: 'conversor', icon: 'archive' },
    { title: 'Lista Digimon', url: 'lista-digimon', icon: 'trash' },
  ];
  constructor() {}
}
