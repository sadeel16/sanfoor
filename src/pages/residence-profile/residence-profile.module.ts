import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidenceProfilePage } from './residence-profile';

@NgModule({
  declarations: [
    ResidenceProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ResidenceProfilePage),
  ],
})
export class ResidenceProfilePageModule {}
