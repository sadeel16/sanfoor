import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  getFullName(): any {
    throw new Error("Method not implemented.");
  }
 private user: firebase.User;

 constructor(
  private db: AngularFireDatabase, 
  public afAuth: AngularFireAuth) {
   afAuth.authState.subscribe(user => {
     this.user = user;
   });
 }

 isLoggedIn() {
   return !!this.user;
 }

 signInWithEmail(credentials) {
   return this.afAuth.auth.signInWithEmailAndPassword(
     credentials.email,
     credentials.password
   );
 }
 getUid() {
   return this.user && this.user.uid;
 }
 getExtraUserData() {
  const uid = this.getUid();
  return this.db.object('users/' + uid).valueChanges();
}

 signUp(credentials, extraUserInfo) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then((userCredential) => {
    const user = userCredential.user;
    return this.db.object("users/"+user.uid).set({
      FullName: extraUserInfo.FullName
    })
  })
}

getEmail() {
  return this.user && this.user.email;
}
signOut() {
  this.afAuth.auth.signOut();
}




}


