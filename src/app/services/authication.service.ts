import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthicationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  // Login User
  login(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  getAuthentication() {
    return this.angularFireAuth.auth;
  }
}
