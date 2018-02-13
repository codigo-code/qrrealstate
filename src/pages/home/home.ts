import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from '../login/login';

import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  nombre="QR Real State Application";
  
  equipos=[{id:1,nombre:"Propiedad 1"},
           {id:2, nombre:"Propiedad 2"},
           {id:3,nombre:"Propiedad 3"}
           ];
  saludo($event,equipo){
      this.navCtrl.push(ContactPage,equipo);
  }

}
