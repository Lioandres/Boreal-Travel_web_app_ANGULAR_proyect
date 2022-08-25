import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIUpdate } from 'src/app/interfaces/apiUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-add-excursion',
  templateUrl: './add-excursion.component.html',
  styleUrls: ['./add-excursion.component.css']
})


export class AddExcursionComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private petitionServ:PetitionService) { }


    
   ngOnInit(): void {}
    
      addForm:FormGroup= this.fb.group({
        excursions_template_id:["",[Validators.required]],
        user_id:["",[Validators.required]],
        num_max_people:["",[Validators.required]],
        price:["",[Validators.required]],
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
        timeStart:["",[Validators.required]],
        timeEnd:["",[Validators.required]],
    
      });
    
  
    
    addExcursion(){
        this.addForm.markAllAsTouched()

        if(this.addForm.valid){

        let dateStart=this.addForm.get('dateStart')?.value
        let timeStart=this.addForm.get('timeStart')?.value
        let dateEnd=this.addForm.get('dateEnd')?.value
        let timeEnd=this.addForm.get('timeEnd')?.value
       
        let  startDateAndTime= new Date(dateStart.year,dateStart.month,dateStart.day,timeStart.hour,timeStart.minute,timeStart.second)
        let  endDateAndTime=new Date(dateEnd.year,dateEnd.month,dateEnd.day,timeEnd.hour,timeEnd.minute,timeEnd.second)
    
       
        
        
          this.petitionServ.addExcursion(this.addForm.value,startDateAndTime,endDateAndTime)
           .subscribe((resp:APIUpdate)=>alert(resp.message)) 
          }
          
        else alert('complete todos los campos');
             
            
      }


  

}
