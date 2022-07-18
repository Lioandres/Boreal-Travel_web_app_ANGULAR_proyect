import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface Cart {
    userName:string,
    idExcursion :number,
    numPeople:number,
    date:NgbDateStruct |undefined, 
    totalPrice:number

}