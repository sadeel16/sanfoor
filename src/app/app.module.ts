import { QuestionsPageModule } from './../pages/questions/questions.module';
import { QuestionsPage } from './../pages/questions/questions';
import { ResidencefilterPage } from './../pages/residencefilter/residencefilter';
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
import { SignupPage} from './../pages/signup/signup';
import { LoginPage } from '../pages/login/login';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResidenceProfilePage,
    ResidencefilterPage,
    QuestionsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    SignupPageModule,
    ResidenceProfilePageModule,
    ResidenceProfilePageModule,
    // QuestionsPageModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
    LoginPage,
    SignupPage,
    ResidencefilterPage,
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
