import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  titulo='Registro';
  isNotLogin = false;
  formularioRegistro:FormGroup;

  constructor(public fb: FormBuilder, 
    private alertController: AlertController, 
    public navCtrl: NavController, 
    private loadingCtrl: LoadingController ) { 


this.formularioRegistro = this.fb.group({
'nombre': new FormControl("",Validators.required),
'email': new FormControl("",Validators.required),
'telefono': new FormControl("",Validators.required),
'contrasenia': new FormControl("",Validators.required),
'repContrasenia': new FormControl("",Validators.required)
})
}

  ngOnInit() {
  }

  async registrarse(){
    
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){

      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Faltan datos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

    if(f.contrasenia != f.repContrasenia){

      const alert = await this.alertController.create({
        header: 'Contraseña invalida',
        message: 'Las contraseñas no coinsiden',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      email: f.email,
      telefono: f.telefono,
      contrasenia: f.contrasenia
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

    console.log('registro completo');

  }

}
