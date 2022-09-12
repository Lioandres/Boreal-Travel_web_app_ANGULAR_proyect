import { Component, OnInit,Input } from '@angular/core';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-excursion-list-temp',
  templateUrl: './excursion-list-temp.component.html',
  styleUrls: ['./excursion-list-temp.component.css']
})
export class ExcursionListTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService ) { }

  ngOnInit(): void {
  }
  
  @Input("typeExcursion")   typeExcursion:string=""
  
  get excursionListTempFromAPI(){
  return this.petitionServ.excursionListTempFromAPI
  }

  setExcursionTemp (idTemp:string){
    this.petitionServ.showExcursionTemp(parseInt(idTemp))
    this.petitionServ.getChosenExcursions(idTemp)
  }

}
