import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';
import { APIUpdate } from '../../interfaces/apiUpdate.interface';
import { AuxService } from '../../services/general.service';

@Component({
  selector: 'app-rol-user',
  templateUrl: './rol-user.component.html',
  styleUrls: ['./rol-user.component.css']
})
export class RolUserComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private petitionServ:PetitionService,
              ) { }
  
    ngOnInit(): void {
      
    }
  
    changeRoleForm:FormGroup= this.fb.group({
      id_user:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
      user_role:["",[Validators.maxLength(100)]],
    });
  
    changeRole(){
      this.changeRoleForm.markAllAsTouched()
  
      if(this.changeRoleForm.valid){
        
        this.petitionServ.changeRole(this.changeRoleForm.value)
              .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                if(resp.status===200) {
                  this.changeRoleForm.reset()
                  }
              })
      }
      else {alert('Enter a valid user id')}
    
    }
  
  

}
