import { Component, OnInit } from '@angular/core';
import { ApiTemplateShow} from 'src/app/interfaces/apiTemplateShow.interface';
import { ExcursionTemplate } from 'src/app/interfaces/apiTemplateShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-excursion-temp',
  templateUrl: './show-excursion-temp.component.html',
  styleUrls: ['./show-excursion-temp.component.css']
})
export class ShowExcursionTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
    this.showExcursionTemp(this.id)
  }

id:number=1

get excursionTempFromApi(){
  return this.petitionServ.excursionTempFromApi
}

showExcursionTemp(id:number){
       this.petitionServ.showExcursionTemp(id)

  }

}
