import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  
  signInForm: any;
  formValues: any;
  msg: any;

  constructor(private authService: AuthService,private router:Router,private formBuilder: FormBuilder ){
    this.signInForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
  });
}
  ngOnInit(): void {
    this._initForm();
    
  }

  _initForm(){
    this.signInForm=this.formBuilder.group(
      {
    email: ['',[Validators.email, Validators.required]],
    password:  ['',Validators.required]
      }
    )


    }
  

  onSubmitSignIn() {
    
      const formValues=this.signInForm.value;
      
  
      // Affichez les valeurs d'email et de mot de passe avant l'appel à signIn()
      console.log("Email soumis :", formValues.email);
      console.log("Mot de passe soumis :", formValues.password);
  
      this.authService.signIn(formValues.email,formValues.password)
        .then(() => {
          this.router.navigate(['products']);
        })
        .catch(err => {
          this.msg = err;
        });
    
  }

  


}
