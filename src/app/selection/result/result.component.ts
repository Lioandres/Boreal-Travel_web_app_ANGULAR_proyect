import { Component, OnInit } from '@angular/core';
import { ExcursionsService } from '../../services/excursions.service';

import { PetitionService } from '../../services/petition.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private excursionService:ExcursionsService,
              private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

  get resultExcursionFound (){
    return this.excursionService.resultExcursionFound
  }

  get excursionListTempFromAPI (){
    return this.petitionServ.excursionListTempFromAPI
  }

lookIndexTemp(id_template:string):number{
 return this.petitionServ.lookIndexTemp(id_template) 
}

 
setExcursions (id:string,idTemp:string){
  this.petitionServ.showExcursion(parseInt(id))
  this.petitionServ.showExcursionTemp(parseInt(idTemp))
}

orderByTime(){
  this.excursionService.orderByTime()
}

orderByPrice(){
  this.excursionService.orderByPrice()
  
}

   
  
  

}
