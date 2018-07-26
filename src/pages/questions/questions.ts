import { ResidencesPage } from './../residences/residences';
import { AuthProvider } from './../../providers/auth/auth';
import { FunProvider } from './../../providers/fun/fun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  genders = ['male', 'female']
  services = [
    'water',
    'electricity',
    'wifi']
  post: Observable<any>;
  newpost : string;
  description: PromiseLike<void>;
  price: any;
  gender: any;
  university: any;
  transportation: any;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private funProvider: FunProvider,
    AuthProvider:AuthProvider) {

  }

  addPost(){
    const post = {
    price: this.price,
    gender: this.gender,
    transportation: this.transportation,
    university: this.university,
    services: this.services,
    description: this.description
    
  }

    
    this.funProvider.addPost(post)
      .then((post) => {
      this.navCtrl.push(ResidencesPage)
              
    });

  }

  
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

}
