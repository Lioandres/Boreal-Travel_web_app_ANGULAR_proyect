import { Component, OnInit } from '@angular/core';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService) { }

  ngOnInit(): void { }

  get excursionList():Excursion[] {
    return this.excursionsService.excursionList
  }

}
