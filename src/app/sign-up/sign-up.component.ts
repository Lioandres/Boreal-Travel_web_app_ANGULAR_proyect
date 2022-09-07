import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { creatDateRangeValidator} from './custom.validator'
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private auxServ:AuxService,
              private pettionServ:PetitionService,
              private route:Router) {
  }

  ngOnInit(): void {
  }

  signUpForm:FormGroup= this.fb.group({
    user_name:["",[Validators.required,Validators.minLength(5)]],
    user_role:["",[Validators.required]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
    user_email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    repeatMail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]]
  }, {
    validators: [creatDateRangeValidator()]
});

addUser(){
  this.signUpForm.markAllAsTouched()
  
  if (this.signUpForm.valid) {
    console.log(this.signUpForm.value)
    this.pettionServ.addUser(this.signUpForm.value)
      .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                        if(resp.status===200) {
                          this.route.navigate(['home'])
                          this.auxServ._logInUser= this.signUpForm.get('user_name')?.value
                          this.auxServ._loggedIn=true}
                      })

  }
  else{
      
    alert("Rellene todo los campos correctamente")
  }
}
 
    
    
  // submit():void {
  //   if (this.signUpForm.valid) {
  //     let name=this.signUpForm.get('name')?.value
  //     let mail=this.signUpForm.get('mail')?.value
  //     let password=this.signUpForm.get('password')?.value
  //     this.auxServ.signUp({
  //       userName:name,
  //       userMail:mail,
  //       userpassword:password,
  //     })
    
  //   }
  //   else{
      
  //     alert("Rellene todo los campos correctamente")
  //   }
  // }
}

