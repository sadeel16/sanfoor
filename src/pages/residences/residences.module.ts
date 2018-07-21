import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidencesPage } from './residences';

@NgModule({
  declarations: [
    ResidencesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidencesPage),
  ],
})
export class ResidencesPageModule {}
