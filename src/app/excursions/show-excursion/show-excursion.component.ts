import { Component, OnInit } from '@angular/core';
import { ApiShow } from 'src/app/interfaces/apiShow.interface';
import { Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-excursion',
  templateUrl: './show-excursion.component.html',
  styleUrls: ['./show-excursion.component.css']
})
export class ShowExcursionComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  
  }

id:number=1


get excursionFromApi(){
  return this.petitionServ.excursionFromApi
 }
 

showExcursion(id:number){
       this.petitionServ.showExcursion(id)
}


}
