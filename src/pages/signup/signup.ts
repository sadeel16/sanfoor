import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
 selector: 'page-signup',
 templateUrl: 'signup.html',
})
export class SignupPage {
 signupError: string;
 email: string;
 password: string;
 FullName: any;

 constructor(public navCtrl: NavController, private auth: AuthProvider, public navParams: NavParams) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad SignupPage');
 }

 signup() {
   if (!this.email){return}
   if (!this.password){return}

    const credentials = {
      email: this.email,
      password: this.password,
    };
    const extraUserInfo = {
      FullName: this.FullName
    };
    this.auth.signUp(credentials, extraUserInfo).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.signupError = error.message
    );
 }


}


