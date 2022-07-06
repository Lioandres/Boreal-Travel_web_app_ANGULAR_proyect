import { Component, Input, OnInit } from '@angular/core';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService ) { }

  ngOnInit(): void {
  }

  @Input("typeExcursion")   typeExcursion:string=""

  get excursionList():Excursion[] {
    return this.excursionsService.excursionList
  }






}
