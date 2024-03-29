import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  

  constructor(private fb:FormBuilder,
              private auxServ:AuxService,
              private petitionServ:PetitionService,
              private route:Router,
             ) { }

  ngOnInit(): void {}

  logInForm:FormGroup= this.fb.group({
    user_email:["",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
  })

  logIn() {
    this.logInForm.markAllAsTouched()
      if (this.logInForm.valid) {
        
        this.petitionServ.logIn(this.logInForm.value)
          .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                            if(resp.status===200) {
                              this.route.navigate(['home'])
                              this.auxServ.loggedIn=true
                              localStorage.setItem('token',resp.data.token)
                              this.petitionServ.getProfile()
                                  .subscribe(resp=>{
                                                    this.auxServ.logInUserRole=resp.data.profile.role
                                                    this.auxServ.id_user=resp.data.profile.id
                                                    this.auxServ.logInUser=resp.data.profile.name
                                  })
                             
                            };
                          })

      }
      else{
          
        alert("Rellene todo los campos correctamente")
      }
  }

}
