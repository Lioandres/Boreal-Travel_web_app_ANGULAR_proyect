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
        num_max_people:["",[Validators.required,Validators.max(30)]],
        price:["",[Validators.required, Validators.pattern("[0-9]{1,4}[.][0-9]{2}")]],
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
        timeStart:["",[Validators.required]],
        timeEnd:["",[Validators.required]],
    
      });
    
  
    
    addExcursion(){
      console.log('hi')
        console.log(this.addForm.value,this.addForm.valid)
        this.addForm.markAllAsTouched()

        if(this.addForm.valid){

        let dateStart=this.addForm.get('dateStart')?.value
        let timeStart=this.addForm.get('timeStart')?.value
        let dateEnd=this.addForm.get('dateEnd')?.value
        let timeEnd=this.addForm.get('timeEnd')?.value
       
       
        let  startDateAndTime=dateStart.year+'-'+dateStart.month+'-'+dateStart.day+' '+timeStart.hour+':'+timeStart.minute+':'+timeStart.second
        let  endDateAndTime=dateEnd.year+'-'+dateEnd.month+'-'+dateEnd.day+' '+timeEnd.hour+':'+timeEnd.minute+':'+timeEnd.second

       
        
          this.petitionServ.addExcursion(this.addForm.value,startDateAndTime,endDateAndTime)
           .subscribe((resp:APIUpdate)=>{alert(JSON.stringify(resp.message,null,4))
                                          if(resp.status===200) {
                                            this.addForm.reset()

                                          }
                                        }) 
          }
          
        else alert('complete todos los campos');
             
            
      }


  

}
