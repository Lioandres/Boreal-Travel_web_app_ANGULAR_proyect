import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiShow } from 'src/app/interfaces/apiShow.interface';
import { Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';



@Component({
  selector: 'app-delete-excursion',
  templateUrl: './delete-excursion.component.html',
  styleUrls: ['./delete-excursion.component.css']
})
export class DeleteExcursionComponent implements OnInit {


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


  deleteExcursion(){

    this.idForm.markAllAsTouched()
    if(this.idForm.valid){
         this.petitionServ.deleteExcursion(this.idForm.get('id')?.value)
                .subscribe((resp)=>{alert(JSON.stringify(resp.message,null,4))
                  if(resp.status===200) {
                    this.idForm.reset()
                    this.petitionServ.showList()
                   }
                 }) 
    }
    else {alert('Enter a valid user id')}
  }

}
