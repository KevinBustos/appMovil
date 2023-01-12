import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'people' },
    { title: 'Clima', url: 'clima', icon: 'sunny' },
    { title: 'Conversor', url: 'conversor', icon: 'cash' },
    { title: 'Lista Digimon', url: 'lista-digimon', icon: 'list' },
  ];
  constructor(public navCtrl: NavController, private toastController: ToastController) {

  }

  public cerrarSesion = [
    {title:'Cerrar sesion', url: '/login', icon: 'exit'}
  ];

  async mensaje(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hasta la proximaaa!!!!',
      duration: 2000,
      position: position
    });

    await toast.present();
  }
}
