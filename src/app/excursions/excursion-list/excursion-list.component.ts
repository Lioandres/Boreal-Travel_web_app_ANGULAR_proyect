import { Component, OnInit,Input } from '@angular/core';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-excursion-list',
  templateUrl: './excursion-list.component.html',
  styleUrls: ['./excursion-list.component.css']
})
export class ExcursionListComponent implements OnInit {

  constructor(private petitionServ:PetitionService ) { }

  ngOnInit(): void {
  }
  
  @Input("typeExcursion")   typeExcursion:string=""
  
  get excursionListTempFromAPI(){
  return this.petitionServ.excursionListTempFromAPI
  }
}
