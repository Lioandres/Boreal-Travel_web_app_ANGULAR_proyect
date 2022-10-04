import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiTemplateShow } from 'src/app/interfaces/apiTemplateShow.interface';
import { ExcursionTemplate } from 'src/app/interfaces/apiTemplateShowList.interface';
import { APITempUpdate } from 'src/app/interfaces/apiTempUpdate.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-modify-temp',
  templateUrl: './modify-temp.component.html',
  styleUrls: ['./modify-temp.component.css']
})
export class ModifyTempComponent implements OnInit {

  constructor(private fb:FormBuilder,
  private petitionServ:PetitionService,
  private activateRoute:ActivatedRoute,
  private route:Router) { }

  tempLoad!:ExcursionTemplate
  ngOnInit(): void {
    const id=this.activateRoute.snapshot.paramMap.get('id')
        this.petitionServ.showTempLoad(parseInt(id!))
          .subscribe((resp: ApiTemplateShow) => {     
              this.tempLoad = resp.data;
              this.modifyTempForm=this.fb.group({
                      id_excursion_template:[this.tempLoad.id_excursion_template],
                      title:[this.tempLoad.title],
                      img:[this.tempLoad.img],
                      type:[this.tempLoad.type],
                      description:[this.tempLoad.description],
                      price_default:[this.tempLoad.price_default],
                      max_num_people_default:[this.tempLoad.max_num_people_default],
                    
               })
               
            })

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
      
      this.petitionServ.modifyExcursionTemp(this.modifyTempForm.value)
       .subscribe((resp:APITempUpdate)=>{alert(JSON.stringify(resp.message,null,4))
                                          if(resp.status===200) {
                                            //this.modifyTempForm.reset()
                                            this.petitionServ.showListTemp()
                                            this.route.navigate(["/edition/showTempList"])
                                          }
                                        }) 
    }
    else {alert('comlete all fields')}
  
  }

}
