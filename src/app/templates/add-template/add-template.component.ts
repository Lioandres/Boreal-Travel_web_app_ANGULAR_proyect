import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { APITempUpdate } from 'src/app/interfaces/apiTempUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  constructor(private fb:FormBuilder,
  private petitionServ:PetitionService) { }
  
    ngOnInit(): void {
    }
  
    addTempForm:FormGroup= this.fb.group({
      title:["",[Validators.required, Validators.maxLength(30)]],
      img:["",[Validators.required]],
      type:["",[Validators.required]],
      description:["",[Validators.required,Validators.maxLength(1000)]],
      price_default:["",[Validators.required, Validators.pattern("[0-9]{1,4}[.][0-9]{2}")]],
      max_num_people_default:["",[Validators.required,Validators.max(30)]],
  
    });
  

  
    addExcursionTemp(){
      this.addTempForm.markAllAsTouched()
      if(this.addTempForm.valid){
        
        this.petitionServ.addExcursionTemp(this.addTempForm.value)
         .subscribe((resp:APITempUpdate)=>{alert(resp.message)
                                            if(resp.status===200) {
                                              this.addTempForm.reset()
                                            }
                                          }) 
         
      }
       
      else {alert('complete todos los campos')}
    }
  
  
  
}
