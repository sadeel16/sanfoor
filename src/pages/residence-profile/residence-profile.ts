import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResidenceProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residence-profile',
  templateUrl: 'residence-profile.html',
})
export class ResidenceProfilePage {

  ImageArray : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.ImageArray = [
      {'image' : '../../assets/imgs/1.jpg'},
      {'image' : '../../assets/imgs/2.jpg'},
      {'image' : '../../assets/imgs/3.jpg'}
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidenceProfilePage');
  }

}
