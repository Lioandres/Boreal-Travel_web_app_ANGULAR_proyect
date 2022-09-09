import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';
import { repetedPasswords } from 'src/app/Shared/repetedPassword';

@Component({
  selector: 'app-password-user',
  templateUrl: './password-user.component.html',
  styleUrls: ['./password-user.component.css']
})
export class PasswordUserComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private pettionServ:PetitionService,
   
  ) {
}

  ngOnInit(): void {
  }

  changePassForm:FormGroup= this.fb.group({
   
    old_password:["",[Validators.required,Validators.minLength(8)]],
    user_email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
    repetedPassword:["",[Validators.required,Validators.minLength(8)]],
   
  }, {
    validators: [repetedPasswords()]
});

changePass(){
  this.changePassForm.markAllAsTouched()
  if (this.changePassForm.valid) {
    this.pettionServ.changePass(this.changePassForm.value)
      .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                        if(resp.status===200) {
                          this.changePassForm.reset()
                          }
                      })
  }
  else{
    alert("Rellene todo los campos correctamente")
  }
}

}
