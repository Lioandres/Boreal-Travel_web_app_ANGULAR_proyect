import { Component, OnInit } from '@angular/core';
import { PetitionService } from '../../services/petition.service';

@Component({
  selector: 'app-show-lits-temp',
  templateUrl: './show-lits-temp.component.html',
  styleUrls: ['./show-lits-temp.component.css']
})
export class ShowLitsTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

get excursionListTempFromAPI(){
  return this.petitionServ.excursionListTempFromAPI
}

}
