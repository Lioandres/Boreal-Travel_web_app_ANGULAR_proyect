import { Component, OnInit } from '@angular/core';
import { ApiShow } from 'src/app/interfaces/apiShow.interface';
import { Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-excursion',
  templateUrl: './show-excursion.component.html',
  styleUrls: ['./show-excursion.component.css']
})
export class ShowExcursionComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private petitionServ:PetitionService) { }
  
    ngOnInit(): void {
    }
  
      idForm:FormGroup= this.fb.group({
           id:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
      });


get excursionFromApi(){
  return this.petitionServ.excursionFromApi
 }
 

showExcursion(){
  this.idForm.markAllAsTouched()
  
      if(this.idForm.valid){
       this.petitionServ.showExcursion(this.idForm.get('id')?.value)
      }       

      else {alert('Enter a valid user id')}

}

}

