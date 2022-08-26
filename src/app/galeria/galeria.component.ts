import { Component, OnInit } from '@angular/core';
import { Excursion_ } from '../interfaces/excursion_';
import { ExcursionsService } from '../services/excursions.service';
import { PetitionService } from '../services/petition.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void { }

  get excursionListTempFromAPI(){
    return this.petitionServ.excursionListTempFromAPI
  }

}
