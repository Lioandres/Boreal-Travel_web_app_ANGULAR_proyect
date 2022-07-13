import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxService } from '../services/general.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  

  constructor(private fb:FormBuilder,private auxServ:AuxService) { }

  ngOnInit(): void {}

  logInForm:FormGroup= this.fb.group({
    name:["",[Validators.required,Validators.minLength(5)]],
    password:["",[Validators.required,Validators.minLength(8)]],
  })

  logIn() {
    if (this.logInForm.valid) {
      let name=this.logInForm.get('name')?.value
      let password=this.logInForm.get('password')?.value
      this.auxServ.logIn(name,password)
    
    
    }
    else{
      alert("Rellene todo los campos correctamente")
    }
  }

}
