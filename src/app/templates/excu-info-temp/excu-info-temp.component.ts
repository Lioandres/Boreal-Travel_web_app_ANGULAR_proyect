import { Component, OnInit } from '@angular/core';

import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-excu-info-temp',
  templateUrl: './excu-info-temp.component.html',
  styleUrls: ['./excu-info-temp.component.css']
})
export class ExcuInfoTempComponent implements OnInit {

  constructor(private auxServ:AuxService,
              private petitionServ:PetitionService) { }

ngOnInit(): void {

}

// idExcursion  from Services 



get excursionTemp(){
return this.petitionServ.excursionTemp
}

}
