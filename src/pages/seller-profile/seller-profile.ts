import { QuestionsPage } from './../questions/questions';
import { HomePage } from './../home/home';
import { ResidenceProfilePage } from './../residence-profile/residence-profile';
import { Observable } from 'rxjs';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunProvider } from '../../providers/fun/fun';

/**
 * Generated class for the SellerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-profile',
  templateUrl: 'seller-profile.html',
})
export class SellerProfilePage {
  posts: Observable<any>;
  userData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider, private funpProvider: FunProvider) {
    this.posts = funpProvider.getPosts();
    auth.getExtraUserData().subscribe((UserData) => {
      this.userData = UserData
    });
  }

  selectpost(key) {
    this.navCtrl.push(ResidenceProfilePage, {
      key
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerProfilePage');

  }


  getFullName() {

  }


  openquestionpage() {
    this.navCtrl.push(QuestionsPage);
  }

}
