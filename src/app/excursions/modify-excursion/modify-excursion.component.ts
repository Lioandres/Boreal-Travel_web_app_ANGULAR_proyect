import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIUpdate } from 'src/app/interfaces/apiUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Excursion } from 'src/app/interfaces/apiShow.interface';

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
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
        timeStart:["",[Validators.required]],
        timeEnd:["",[Validators.required]],
    
      });
    
  
    
      modifyExcursion(){
        this.modifyForm.markAllAsTouched()

        let dateStart=this.modifyForm.get('dateStart')?.value
        let timeStart=this.modifyForm.get('timeStart')?.value
        let dateEnd=this.modifyForm.get('dateEnd')?.value
        let timeEnd=this.modifyForm.get('timeEnd')?.value
       
        let  startDateAndTime= new Date(dateStart.year,dateStart.month,dateStart.day,timeStart.hour,timeStart.minute,timeStart.second)
        let  endDateAndTime=new Date(dateEnd.year,dateEnd.month,dateEnd.day,timeEnd.hour,timeEnd.minute,timeEnd.second)
        
        console.log(this.modifyForm.value,startDateAndTime,endDateAndTime)
    


       
        if(this.modifyForm.valid){
        
          this.petitionServ.modifyExcursion(this.modifyForm.value,startDateAndTime,endDateAndTime)
           .subscribe((resp:APIUpdate)=>alert(resp.message)) 
          }
          
        else alert('complete todos los campos');
             
            
      }


      
    
    
  }

