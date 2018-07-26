import { QuestionsPage } from './../questions/questions';
import { FunProvider } from './../../providers/fun/fun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ResidenceProfilePage } from '../residence-profile/residence-profile';

/**
 * Generated class for the ResidencefilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residencefilter',
  templateUrl: 'residencefilter.html',
})
export class ResidencefilterPage {
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
    console.log('ionViewDidLoad ResidencefilterPage');
  }

 
}
