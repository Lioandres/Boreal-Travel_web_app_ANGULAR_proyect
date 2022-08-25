import { Component, OnInit } from '@angular/core';
import { Excursion_ } from '../interfaces/excursion_';
import { ExcursionsService } from '../services/excursions.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService) { }

  ngOnInit(): void { }

  get excursionList():Excursion_[] {
    return this.excursionsService.excursionList
  }

}
