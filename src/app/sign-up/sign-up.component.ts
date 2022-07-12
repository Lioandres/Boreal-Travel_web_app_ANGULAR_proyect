import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxService } from '../services/general.service';

import { creatDateRangeValidator} from './custom.validator'
import { Routes } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder, private auxServ:AuxService) {
  }

  ngOnInit(): void {
  }

  signUpForm:FormGroup= this.fb.group({
    name:["",[Validators.required,Validators.minLength(5)]],
    password:["",[Validators.required,Validators.minLength(8)]],
    mail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    repeatMail:["",[this.ValidatePhone, Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  }, {
    validators: [creatDateRangeValidator()]
});


  ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
    const mail = control.get("mail")
    const repeatMail = control.get("repeatMail")  
    if (mail!=repeatMail) {
        return { 'mailInvalid': true };
      }
      return null;
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
      console.log(this.signUpForm.value)
      console.log(this.auxServ._userRepository)
    }
    else{
      alert("Rellene todo los campos correctamente")
    }
  }
}

