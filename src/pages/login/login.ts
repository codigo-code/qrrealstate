import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  usuario: string;
  password: string;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
 
    if (this.usuario == this.password) {
      this.navCtrl.push(TabsPage);
    }
  }

  /*
   * AAB 13/03/2018
   * Function js
   * on login.html
   * forgot password link
   */
  
  forgotPass() {
    let alert = this.alertCtrl.create({
      title: 'Recuperar Password',
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email',
          type: 'email'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
           // Conditional if(email equals()){} else{}
         
          }
        }
      ]
    });
    alert.present();
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
