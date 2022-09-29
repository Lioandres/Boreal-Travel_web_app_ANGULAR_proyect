import { Component, OnInit } from '@angular/core';

import { ApiShowList, Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-show-list-excursion-crud',
  templateUrl: './show-list-excursion-crud.component.html',
  styleUrls: ['./show-list-excursion-crud.component.css']
})
export class ShowListExcursionCRUDComponent implements OnInit {

 
  constructor(private petitionServ:PetitionService) { }


  ngOnInit(): void {
    this.petitionServ.showList()
  }

get excursionListFromAPI(){
  return this.petitionServ.excursionListFromAPI
}


}
