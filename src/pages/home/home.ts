import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from '../login/login';

import {ContactPage} from '../contact/contact';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController) {

  }
  
  nombre="QR Real State";
  
  equipos=[{id:1,nombre:"Propiedad 1"},
           {id:2, nombre:"Propiedad 2"},
           {id:3,nombre:"Propiedad 3"}
           ];
  saludo($event,equipo){
      this.navCtrl.push(ContactPage,equipo);
  }
  
    clickOnLogo() {
  let alert = this.alertCtrl.create({
    title: 'Global Real State',
    subTitle: 'Qué es GRS?',
    message: 'Global Real State es una herramienta de software creada para pequeños, medianos y grandes inmobiliarios, con el objetivo de transmitir información en tiempo real de un inmueble para así facilitar su venta o alquiler al momento de la negociación.',
    buttons: ['ok']
  });
  alert.present();
}

}
