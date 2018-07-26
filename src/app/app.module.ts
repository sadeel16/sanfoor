import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { FunProvider } from './../providers/fun/fun';
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
import { QuestionsPageModule } from './../pages/questions/questions.module';
import { ResidencefilterPageModule } from '../pages/residencefilter/residencefilter.module';
import { ResidenceProfilePageModule } from './../pages/residence-profile/residence-profile.module';



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
    QuestionsPageModule,
    SellerProfilePageModule,
    ResidencefilterPageModule
    



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
   AngularFireDatabase,
    AuthProvider,
    FunProvider

  ]
})
export class AppModule {}
