import { Component, OnInit } from '@angular/core';
import { ApiShow } from 'src/app/interfaces/apiShow.interface';
import { Excursion } from 'src/app/interfaces/apiShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';



@Component({
  selector: 'app-delete-excursion',
  templateUrl: './delete-excursion.component.html',
  styleUrls: ['./delete-excursion.component.css']
})
export class DeleteExcursionComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

  id:number=1
 
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

deleteExcursion(id:number){
       this.petitionServ.deleteExcursion(id)
              .subscribe((resp)=>console.log(resp))
  }

}
