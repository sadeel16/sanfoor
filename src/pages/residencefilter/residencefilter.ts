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
  allTeamDivisions(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  posts: Observable<any>;
  queryText: string;
  teams =  [];
  
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

  // updateTeams(){
  //   let queryTextLower = this.queryText.toLowerCase();
  //   let filteredTeams = [];
  //   _.forEach(this.allTeamDivisions, td => {
  //     let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
  //     if (teams.length){
  //       filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams});

  //     }
  //   });
  //   this.teams = filteredTeams
  // }
 
}
