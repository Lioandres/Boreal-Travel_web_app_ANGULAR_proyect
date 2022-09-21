import { Component, Injectable, OnInit } from '@angular/core';
import { Excursion_ } from '../interfaces/excursion_';
import { ExcursionsService } from '../services/excursions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
 @Injectable()
 export class CustomDateParserFormatter extends NgbDateParserFormatter {
   readonly DELIMITER = '-';
 
   parse(value: string): NgbDateStruct | null {
     if (value) {
       const date = value.split(this.DELIMITER);
       return {
         day: parseInt(date[0], 10),
         month: parseInt(date[1], 10),
         year: parseInt(date[2], 10),
       };
     }
     return null;
   }
 
   format(date: NgbDateStruct | null): string {
     return date
       ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
       : '';
   }
 }




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

   // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
      { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],


})
export class HomeComponent implements OnInit {

  constructor(private excursionService:ExcursionsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 

  searchForm:FormGroup= this.fb.group({
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
  
  });

  
  findExcursions () {
   
    if(this.searchForm.valid){
      
      let dateStart=this.searchForm.get('dateStart')?.value
      let dateEnd=this.searchForm.get('dateEnd')?.value

      let  startDateAndTime= new Date(dateStart.year,dateStart.month,dateStart.day,0o0,0o0,0o0)
      let  endDateAndTime=new Date(dateEnd.year,dateEnd.month,dateEnd.day,0o0,0o0,0o0)
    
      this.excursionService.findExcursions(startDateAndTime,endDateAndTime)
    }

    else {alert('complete todos los campos')}
  

    
  }
    
    
    
    
  
}
