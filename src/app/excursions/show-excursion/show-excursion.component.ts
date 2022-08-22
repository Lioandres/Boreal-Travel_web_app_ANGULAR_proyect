import { Component, OnInit } from '@angular/core';
import { ApiShow, Excursion } from 'src/app/interfaces/apiShow.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-excursion',
  templateUrl: './show-excursion.component.html',
  styleUrls: ['./show-excursion.component.css']
})
export class ShowExcursionComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

excursion:Excursion={
    id_excursion:"",
    excursions_template_id:  "",
    user_id:                  "",
    num_max_people: "",
    price:          "",
    start:          new(Date) ,
    end:            new(Date),
    created_at:     new(Date),
    updated_at:     new(Date)
} 
 excursionFromApi:ApiShow={
    status: 0,
    error:true,
    messages:"",
    data:this.excursion
}

id:number=1
 


showExcursion(id:number){
       this.petitionServ.showExcursion(id)
              .subscribe((resp:ApiShow)=>{this.excursionFromApi=resp})
  }


}
