import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';
import { creatDateRangeValidator } from 'src/app/sign-up/custom.validator';

@Component({
  selector: 'app-email-user',
  templateUrl: './email-user.component.html',
  styleUrls: ['./email-user.component.css']
})
export class EmailUserComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private pettionServ:PetitionService,
   
  ) {
}

  ngOnInit(): void {
  }

  changeMailForm:FormGroup= this.fb.group({
   
    old_email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    user_email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    repeatMail:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
  }, {
    validators: [creatDateRangeValidator()]
});

changeMail(){
  this.changeMailForm.markAllAsTouched()
  if (this.changeMailForm.valid) {
    this.pettionServ.changeMail(this.changeMailForm.value)
      .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                        if(resp.status===200) {
                          this.changeMailForm.reset()

                          }
                      })

  }
  else{
      
    alert("Complete all fields")
  }
}


}
