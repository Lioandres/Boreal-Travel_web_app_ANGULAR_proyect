import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { creatDateRangeValidator} from './custom.validator'
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private auxServ:AuxService,
              private pettionServ:PetitionService) {
  }

  ngOnInit(): void {
  }

  signUpForm:FormGroup= this.fb.group({
    user_name:["",[Validators.required,Validators.minLength(5)]],
    user_rol:["",[Validators.required]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
    user_mail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    repeatMail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  }, {
    validators: [creatDateRangeValidator()]
});

addUser(){
  this.signUpForm.markAllAsTouched()
  if (this.signUpForm.valid) {
    this.pettionServ.addUser(this.signUpForm.value)
  }
  else{
      
    alert("Rellene todo los campos correctamente")
  }
}
 
    
    
  submit():void {
    if (this.signUpForm.valid) {
      let name=this.signUpForm.get('name')?.value
      let mail=this.signUpForm.get('mail')?.value
      let password=this.signUpForm.get('password')?.value
      this.auxServ.signUp({
        userName:name,
        userMail:mail,
        userpassword:password,
      })
    
    }
    else{
      
      alert("Rellene todo los campos correctamente")
    }
  }
}

