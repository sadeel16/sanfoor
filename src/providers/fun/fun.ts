import { AuthProvider } from './../auth/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ValueTransformer } from '@angular/compiler/src/util';


@Injectable()
export class FunProvider {
  
  constructor(public db: AngularFireDatabase,private AuthProvider:AuthProvider) {
    console.log('Hello FunProvider Provider');
  }


  getPosts() {
    return this.db.list('post').snapshotChanges();
  }

  getPostByKey(key) {
    return this.db.object('post/' + key).snapshotChanges();
  }

  addPost(post) {

    return this.db.list('post').push({
      price: post.price,
      gender: post.gender, 
      transportation: post.transportation, 
      university: post.university, 
      service: post.services, 
      description: post.description
    });
  }

  removePost(id) {
    this.db.list('post').remove(id);
  }
}

