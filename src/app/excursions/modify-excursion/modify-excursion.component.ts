import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIUpdate } from 'src/app/interfaces/apiUpdate.interface';
import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';
import { ActivatedRoute } from '@angular/router';
import { Excursion } from '../../interfaces/apiShowList.interface';
import { ApiShow } from 'src/app/interfaces/apiShow.interface';



@Component({
  selector: 'app-modify-excursion',
  templateUrl: './modify-excursion.component.html',
  styleUrls: ['./modify-excursion.component.css']
})
export class ModifyExcursionComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private petitionServ:PetitionService,
    private auxServ:AuxService,
    private activateRoute:ActivatedRoute) { }


    excursionLoad!:Excursion

      ngOnInit(): void {
        const id=this.activateRoute.snapshot.paramMap.get('id')
        this.petitionServ.showExcursionLoad(parseInt(id!))
          .subscribe((resp: ApiShow) => {     
              this.excursionLoad = resp.data;
              this.modifyForm=this.fb.group({
                id_excursion:[this.excursionLoad.id_excursion],
                excursions_template_id:[this.excursionLoad.excursions_template_id],
                user_id:[this.excursionLoad.user_id],
                num_max_people:[this.excursionLoad.num_max_people],
                price:[this.excursionLoad.price],
                dateStart:["",[Validators.required]],
                dateEnd:["",[Validators.required]],
                timeStart:["",[Validators.required]],
                timeEnd:["",[Validators.required]],
               
               })
            })

      }
    
    get logInUser(){
        return this.auxServ.logInUser
      }
    
    get id_user(){
        return this.auxServ.id_user
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
          
        else alert('complete all fields');
             
            
      }


      
    
    
  }

