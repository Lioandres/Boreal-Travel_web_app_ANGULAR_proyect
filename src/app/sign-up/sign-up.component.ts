import { Component, OnInit } from '@angular/core';
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
              private route:Router,

            ) {
  }

  ngOnInit(): void {
  }

  signUpForm:FormGroup= this.fb.group({
    user_name:["",[Validators.required,Validators.minLength(5)]],
    user_role:["operator",[Validators.required]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
    user_email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    repeatMail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]]
  }, {
    validators: [creatDateRangeValidator()]
});

addUser(){
  this.signUpForm.markAllAsTouched()
  
  if (this.signUpForm.valid) {
    
    this.pettionServ.addUser(this.signUpForm.value)
      .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                        if(resp.status===200) {
                          this.route.navigate(['home'])
                          this.auxServ.logInUser= this.signUpForm.get('user_name')?.value
                          this.auxServ.loggedIn=true
                          this.auxServ.logInUserRole=this.signUpForm.get('user_role')?.value
  
                          }
                      })

  }
  else{
      
    alert("Rellene todo los campos correctamente")
  }
}
 
    
    
  
}

