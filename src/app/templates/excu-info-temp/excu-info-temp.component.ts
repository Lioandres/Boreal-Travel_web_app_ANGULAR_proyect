import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-excu-info-temp',
  templateUrl: './excu-info-temp.component.html',
  styleUrls: ['./excu-info-temp.component.css']
})
export class ExcuInfoTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService,
              private route:Router,
              private fb:FormBuilder) { }

ngOnInit(): void {

}



get excursionTemp(){
    return this.petitionServ.excursionTemp
}

get excursionListFromId(){
  return this.petitionServ.excursionListFromId
}

excuForm:FormGroup= this.fb.group({
   
  id_excursion:["",[Validators.required]],
  
});

setExcursion(){
  
  
  this.excuForm.markAllAsTouched()
  if(this.excuForm.valid){
    this.petitionServ.showExcursion(parseInt(this.excuForm.get('id_excursion')?.value))
    this.route.navigate(['excuInfo'])
}
  else alert('debe elegir una fecha válida')
}

}