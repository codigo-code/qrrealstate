import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    private baseURL:string;
    equipo:any;
  constructor(public navCtrl: NavController, private navParams: NavParams,private http:Http) {
      this.equipo = this.navParams.data;
  }
    
    //promise
    getDepartamentos(){
        
        return new Promise(resolve=>{
        this.http.get(`${this.baseURL}\algo.json`).subscribe(res =>resolve(res.json()));    
        });
    }

}
