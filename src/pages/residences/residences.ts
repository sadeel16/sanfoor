import { FunProvider } from './../../providers/fun/fun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ResidenceProfilePage } from '../residence-profile/residence-profile';

/**
 * Generated class for the ResidencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residences',
  templateUrl: 'residences.html',
})
export class ResidencesPage {
  posts: Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private funProvider:FunProvider) {
    this.posts= funProvider.getPosts();
    funProvider.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  selectpost(key) {
    this.navCtrl.push(ResidenceProfilePage, {
      key
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidencesPage');
  }

}
