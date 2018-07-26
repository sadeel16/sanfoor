import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResidencefilterPage } from '../residencefilter/residencefilter';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  splash = true;
  ImageArray: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ImageArray = [
      {'image': '../assets/imgs/img1.jpg'},
      {'image': '../assets/imgs/RecentDeals.png'},
      {'image': '../assets/imgs/img2.jpg'},
      {'image': '../assets/imgs/img3.jpg'}
    ]
    
}

movetologin(){
  this.navCtrl.push(LoginPage, {
  });
}

movetoresidencelist(){
  this.navCtrl.push(ResidencefilterPage,{
  });
}

ionViewDidLoad() {
  setTimeout(() => this.splash = false, 4000);
}

}



