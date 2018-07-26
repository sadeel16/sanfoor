import { SellerProfilePage } from './../seller-profile/seller-profile';
import { QuestionsPage } from './../questions/questions';
import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ResidencefilterPage } from '../residencefilter/residencefilter';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  splash = true;
  ImageArray: any = [];


  constructor(public navCtrl: NavController,
    private auth: AuthProvider,
    public navParams: NavParams,
    private toastCtrl: ToastController) {
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
signOut() {
  this.auth.signOut();
  let toast = this.toastCtrl.create({
    message: 'LogOut successfully',
    duration: 3000,
    position: 'top'
  });

  toast.present();
}

SignIn(){
  if (this.auth.isLoggedIn()){
    this.navCtrl.push(SellerProfilePage);
  }
  else{
    this.navCtrl.push(LoginPage);
  }
  
}
movetoresidencelist(){
  this.navCtrl.push(ResidencefilterPage,{
  });
}

ionViewDidLoad() {
  setTimeout(() => this.splash = false, 4000);
}

gotonajah(){
  this.navCtrl.push(ResidencefilterPage);
}

}

