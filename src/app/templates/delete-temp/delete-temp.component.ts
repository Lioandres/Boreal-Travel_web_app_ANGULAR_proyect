import { Component, OnInit } from '@angular/core';
import { ApiTemplateShow } from 'src/app/interfaces/apiTemplateShow.interface';
import { ExcursionTemplate } from 'src/app/interfaces/apiTemplateShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-delete-temp',
  templateUrl: './delete-temp.component.html',
  styleUrls: ['./delete-temp.component.css']
})
export class DeleteTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

  id:number=1
 
  excursionTemp:ExcursionTemplate={
    id_excursion_template:  "",
    title:                  "",
    img:                    "",
    type:                   "",
    description:            "",
    price_default:          "",
    max_num_people_default: "",
} 
 excursionTempFromApi:ApiTemplateShow={
    status: 0,
    error:true,
    messages:"",
    data:this.excursionTemp
}

deleteExcursionTemp(id:number){
       this.petitionServ.deleteExcursionTemp(id)
              .subscribe((resp)=>console.log(resp))
  }

}

