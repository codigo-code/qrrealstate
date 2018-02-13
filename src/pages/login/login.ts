import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {CamaraService} from '../shared/Camera.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[CamaraService]
})
export class LoginPage {

CamaraService:CamaraService;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,CamaraService: CamaraService) {
      this.CamaraService = CamaraService;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
      if(this.usuario == this.password){
          this.navCtrl.push(TabsPage);
      }
  }
    
    scanner(){
        this.CamaraService.scan();    
    }
  
}
