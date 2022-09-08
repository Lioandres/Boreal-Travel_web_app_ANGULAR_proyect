import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  

  constructor(private fb:FormBuilder,
              private auxServ:AuxService,
              private pettionServ:PetitionService,
              private route:Router) { }

  ngOnInit(): void {}

  logInForm:FormGroup= this.fb.group({
    user_email:["",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
  })

  logIn() {
    this.logInForm.markAllAsTouched()
      if (this.logInForm.valid) {
        
        this.pettionServ.logIn(this.logInForm.value)
          .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                            if(resp.status===200) {
                              this.route.navigate(['home'])
                              this.auxServ.logInUser= this.logInForm.get('user_email')?.value
                              this.auxServ.loggedIn=true
                              this.auxServ.id_user}
                              
                          })

      }
      else{
          
        alert("Rellene todo los campos correctamente")
      }
  }

}
