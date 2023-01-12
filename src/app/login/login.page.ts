import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo='Login';
  isNotLogin = false;
  formularioLogin:FormGroup;

  constructor(public fb: FormBuilder, 
    private alertController: AlertController, 
    public navCtrl: NavController, 
    private loadingCtrl: LoadingController ) { 


this.formularioLogin = this.fb.group({
'nombre': new FormControl("",Validators.required),
'contrasenia': new FormControl("",Validators.required)
})
}

  ngOnInit() {
  }

  async ingresar(){
    
    var f = this.formularioLogin.value;
    /*var usuarios = JSON.parse(localStorage.getItem("usuario"));*/

    if(('admin' == f.nombre && '123' == f.contrasenia) ||
       ('user' == f.nombre && '123' == f.contrasenia)){


      console.log('Ingresado')

      this.navCtrl.navigateRoot('home')

      const loading = await this.loadingCtrl.create({
        message: 'Bienvenido ' + f.nombre,
        duration: 2000,
      });
  
      loading.present();
      
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados no coinsiden',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
    }

  }

}
