import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth= false;

  constructor(private userService:UserService) { }
  signIn(email:string,password:string) {
    return new Promise<void>((res, rej) => {
     // setTimeout(() => {
        if(this.userService.user.email=== email&&
          this.userService.user.password===password){
            console.log('succes');
            this.isAuth = true;
            res();
          }
          else{rej('le couple email et mot de passe n\'est pas correct')}
        
      //}, 1000);

    });
    
    


  }
  signOut(){this.isAuth= false;}

}
