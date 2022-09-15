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
        num_max_people:["",[Validators.required,Validators.max(30)]],
        price:["",[Validators.required, Validators.pattern("[0-9]{1,4}[.][0-9]{2}")]],
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
        timeStart:["",[Validators.required]],
        timeEnd:["",[Validators.required]],
    
      });
    
  
    
      modifyExcursion(){
        this.modifyForm.markAllAsTouched()

        if(this.modifyForm.valid){

        let dateStart=this.modifyForm.get('dateStart')?.value
        let timeStart=this.modifyForm.get('timeStart')?.value
        let dateEnd=this.modifyForm.get('dateEnd')?.value
        let timeEnd=this.modifyForm.get('timeEnd')?.value
       
        let  startDateAndTime=dateStart.year+'-'+dateStart.month+'-'+dateStart.day+' '+timeStart.hour+':'+timeStart.minute+':'+timeStart.second
        let  endDateAndTime=dateEnd.year+'-'+dateEnd.month+'-'+dateEnd.day+' '+timeEnd.hour+':'+timeEnd.minute+':'+timeEnd.second

        
        
          this.petitionServ.modifyExcursion(this.modifyForm.value,startDateAndTime,endDateAndTime)
           .subscribe((resp:APIUpdate)=>{alert(resp.message)
                                        
                                          if(resp.status===200) {
                                            this.modifyForm.reset()
                                            this.petitionServ.showList()

                                          } }) 
          }
          
        else alert('complete todos los campos');
             
            
      }


      
    
    
  }

