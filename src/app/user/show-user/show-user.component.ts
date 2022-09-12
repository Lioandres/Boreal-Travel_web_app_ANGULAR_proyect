import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private petitionServ:PetitionService) { }
  
    ngOnInit(): void {
    }
  
      idForm:FormGroup= this.fb.group({
           id_user:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
      });




get userFromApi(){
  return this.petitionServ.userFromApi
 }
 

showUser(){
  this.idForm.markAllAsTouched()
  
      if(this.idForm.valid){
        
       this.petitionServ.showUser(this.idForm.get('id_user')?.value)
      }
      else {alert('Enter a valid user id')}
    }


}
