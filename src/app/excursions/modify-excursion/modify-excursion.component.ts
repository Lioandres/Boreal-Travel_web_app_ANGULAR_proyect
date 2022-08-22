import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIUpdate } from 'src/app/interfaces/apiUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-modify-excursion',
  templateUrl: './modify-excursion.component.html',
  styleUrls: ['./modify-excursion.component.css']
})
export class ModifyExcursionComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private petitionServ:PetitionService) { }
    
      ngOnInit(): void {
      }
    
      modifyForm:FormGroup= this.fb.group({
        id_excursion:["",[Validators.required]],
        excursions_template_id:["",[Validators.required]],
        user_id:["",[Validators.required]],
        num_max_people:["",[Validators.required]],
        price:["",[Validators.required]],
        start:["",[Validators.required]],
        end:["",[Validators.required]],
    
      });
    
  
    
      modifyExcursion(){
        if(this.modifyForm.valid){
    
          console.log(this.modifyForm.value)
          
          this.petitionServ.modifyExcursion(this.modifyForm.value)
           .subscribe((resp:APIUpdate)=>alert(resp.message)) 
        }
        else {alert('complete todos los campos');
              console.log(this.modifyForm.value)}
      }
    
  }

