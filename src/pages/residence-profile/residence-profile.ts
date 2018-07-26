import { FunProvider } from './../../providers/fun/fun';
import { Observable } from 'rxjs';
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
  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private funProvider:FunProvider) {
    const key = navParams.get('key');
    funProvider.getPostByKey(key).subscribe((post) => {
      if (!post) {
        this.post = null;
      } else {
        this.post = post.payload.val();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidenceProfilePage');
  }

}
