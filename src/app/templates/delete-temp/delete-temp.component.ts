import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiTemplateShow } from 'src/app/interfaces/apiTemplateShow.interface';
import { ExcursionTemplate } from 'src/app/interfaces/apiTemplateShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-delete-temp',
  templateUrl: './delete-temp.component.html',
  styleUrls: ['./delete-temp.component.css']
})
export class DeleteTempComponent implements OnInit {

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


deleteExcursionTemp(){

  this.idForm.markAllAsTouched()
  if(this.idForm.valid){
       this.petitionServ.deleteExcursionTemp(this.idForm.get('id')?.value)
              .subscribe((resp)=>{alert(JSON.stringify(resp.message,null,4))
                if(resp.status===200) {
                  this.idForm.reset()
                  this.petitionServ.showListTemp()
                 }
               }) 
  }
  else {alert('Enter a valid user id')}
}

}

