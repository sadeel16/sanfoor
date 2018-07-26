import { ResidencesPageModule } from './../pages/residences/residences.module';
import { ResidenceProfilePageModule } from './../pages/residence-profile/residence-profile.module';
import { ResidenceProfilePage } from './../pages/residence-profile/residence-profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { LoginPageModule } from './../pages/login/login.module';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPageModule } from './../pages/signup/signup.module';
import { SellerProfilePageModule } from '../pages/seller-profile/seller-profile.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    SignupPageModule,
    ResidenceProfilePageModule,
    SellerProfilePageModule,
    ResidencesPageModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResidenceProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
   AngularFireDatabase,
    AuthProvider,

  ]
})
export class AppModule {}
