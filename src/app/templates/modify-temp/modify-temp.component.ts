import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { APITempUpdate } from 'src/app/interfaces/apiTempUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-modify-temp',
  templateUrl: './modify-temp.component.html',
  styleUrls: ['./modify-temp.component.css']
})
export class ModifyTempComponent implements OnInit {

  constructor(private fb:FormBuilder,
  private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

  modifyTempForm:FormGroup= this.fb.group({
    id_excursion_template:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
    title:["",[Validators.maxLength(30)]],
    img:["",[Validators.maxLength(100)]],
    type:["",[Validators.maxLength(100)]],
    description:["",[Validators.maxLength(1000)]],
    price_default:["",[Validators.pattern("[0-9]{1,4}[.][0-9]{2}")]],
    max_num_people_default:["",[Validators.max(30)]],

  });

 

  

  modifyExcursionTemp(){
    this.modifyTempForm.markAllAsTouched()

    if(this.modifyTempForm.valid){


      console.log(this.modifyTempForm.value)
      console.log(
      this.modifyTempForm.get('id_excursion_template')?.value,
      this.modifyTempForm.get('title')?.value,
      this.modifyTempForm.get('img')?.value,
      this.modifyTempForm.get('type')?.value,
      this.modifyTempForm.get('description')?.value,
      this.modifyTempForm.get('price_default')?.value,
      this.modifyTempForm.get('max_num_people_default')?.value)
      
      this.petitionServ.modifyExcursionTemp(this.modifyTempForm.value)
       .subscribe((resp:APITempUpdate)=>alert(resp.message)) 
    }
    else {alert('ingrese el id de la excursion')}
  
  }



}
