import { Component, OnInit } from '@angular/core';
import { ApiShowList, Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-show-list-excursion',
  templateUrl: './show-list-excursion.component.html',
  styleUrls: ['./show-list-excursion.component.css']
})
export class ShowListExcursionComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }


  ngOnInit(): void {

  }

get excursionListFromAPI(){
  return this.petitionServ.excursionListFromAPI
}





}
