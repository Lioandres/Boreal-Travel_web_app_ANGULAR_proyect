import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-excursion-temp',
  templateUrl: './show-excursion-temp.component.html',
  styleUrls: ['./show-excursion-temp.component.css']
})
export class ShowExcursionTempComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private petitionServ:PetitionService,
              private activateRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      const id=this.activateRoute.snapshot.paramMap.get('id')
       this.petitionServ.showExcursionTemp(parseInt(id!))
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