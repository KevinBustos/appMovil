import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
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
  constructor(public navCtrl: NavController, private toastController: ToastController, private modalController: ModalController) {

    this.presentSplash();

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

  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
