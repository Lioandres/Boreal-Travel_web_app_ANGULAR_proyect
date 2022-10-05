import { Pipe, PipeTransform } from '@angular/core';

  import { DatePipe } from '@angular/common';  

  @Pipe({

   name: 'dateHour'

  })

  export class DateHour extends 

 DatePipe implements PipeTransform {

   override transform(value: any, args?: any): any {
 return super.transform(value, "d/MM/y -  HH:mm ");   } }