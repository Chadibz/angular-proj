import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  // lazemk 3asbaa define l user
  private readonly fixedUser = {
    email: 'wajd@gmail.com',
    password: 'azerty'
  };

  constructor() { }

  signIn(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      // Szidd consolee bch tefhemm  kan 9bal may9aren fii chayy m3a l username wel password
      setTimeout(() => {
        if (this.fixedUser.email === email && this.fixedUser.password === password) {
          console.log('Success');
          this.isAuth = true;
          resolve();
        } else {
          reject('Le couple email et mot de passe n\'est pas correct');
        }
      }, 1000);
    });
  }

  signOut() {
    this.isAuth = false;
  }
}
