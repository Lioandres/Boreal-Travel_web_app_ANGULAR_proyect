import { Component, OnInit } from '@angular/core';
import { ExcursionsService } from '../services/excursions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private excursionService:ExcursionsService) { }

  ngOnInit(): void {
  }

  get resultExcursionFound (){
    return this.excursionService.resultExcursionFound
  }

}
