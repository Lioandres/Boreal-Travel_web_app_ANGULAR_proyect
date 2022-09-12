import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-excursion-temp',
  templateUrl: './show-excursion-temp.component.html',
  styleUrls: ['./show-excursion-temp.component.css']
})
export class ShowExcursionTempComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private petitionServ:PetitionService) { }
  
    ngOnInit(): void {
    }
  
      idForm:FormGroup= this.fb.group({
           id:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
      });

get excursionTempFromApi(){
  return this.petitionServ.excursionTempFromApi
}

showExcursionTemp(){
  this.idForm.markAllAsTouched()
  
  if(this.idForm.valid){
       this.petitionServ.showExcursionTemp(this.idForm.get('id')?.value)
  }
  else {alert('Enter a valid user id')}

}

}