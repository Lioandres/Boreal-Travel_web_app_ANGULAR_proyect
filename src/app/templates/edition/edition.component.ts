import { Component, OnInit } from '@angular/core';
import { AuxService } from '../../services/general.service';
import { ExcursionsService } from '../../services/excursions.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService) { }

  ngOnInit(): void {
  }
 get excursionList(){
   return this.excursionsService.excursionList
 }

 

}
