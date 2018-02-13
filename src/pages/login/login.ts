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
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (User.isValid(data.email)) {
              // send recovery email to
            } else {
                alert= this.alertCtrl.create({
                title: 'Error',
                subTitle: 'El email no pertenece a un usuario activo'
                });
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
