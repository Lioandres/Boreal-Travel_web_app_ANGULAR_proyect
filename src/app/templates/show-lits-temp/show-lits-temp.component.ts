import { Component, OnInit } from '@angular/core';
import { ExcursionsService } from 'src/app/services/excursions.service';
import { HttpClient } from '@angular/common/http';
import { ExcursionTemplate, TemplateList } from '../../interfaces/templateList.interface';
import { PetitionService } from '../../services/petition.service';

@Component({
  selector: 'app-show-lits-temp',
  templateUrl: './show-lits-temp.component.html',
  styleUrls: ['./show-lits-temp.component.css']
})
export class ShowLitsTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }


  ngOnInit(): void {

   this.getTempList()
  }

 get excursionListFromAPI (){
   return this.petitionServ.excursionListFromAPI
 }

 getTempList (){
   this.petitionServ.getTempList()
 }

}
