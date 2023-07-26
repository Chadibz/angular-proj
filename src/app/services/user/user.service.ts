import { Injectable } from '@angular/core';
import { User } from 'src/app/modeles/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { 
    this.user=new User(
      'Wajd','Mehdaoui','wajd@gmail.com','azerty'
    );
  }

  updateUser(user: User){
    this.user=user;
  
  }
  
}
