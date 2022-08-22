import { Component, OnInit } from '@angular/core';
import { ApiTemplateShowList, ExcursionTemplate } from '../../interfaces/apiTemplateShowList.interface';
import { PetitionService } from '../../services/petition.service';

@Component({
  selector: 'app-show-lits-temp',
  templateUrl: './show-lits-temp.component.html',
  styleUrls: ['./show-lits-temp.component.css']
})
export class ShowLitsTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }


  ngOnInit(): void {

   this.showListTemp()
  }

excursionListTempFromAPI:ExcursionTemplate[]=[]

showListTemp (){
   this.petitionServ.showListTemp()
      .subscribe((resp:ApiTemplateShowList)=>{this.excursionListTempFromAPI=resp.data})
 }

}
