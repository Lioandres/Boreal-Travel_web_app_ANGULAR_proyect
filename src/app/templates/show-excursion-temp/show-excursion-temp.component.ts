import { Component, OnInit } from '@angular/core';
import { ApiTemplateShow} from 'src/app/interfaces/apiTemplateShow.interface';
import { ExcursionTemplate } from 'src/app/interfaces/apiTemplateShowList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-show-excursion-temp',
  templateUrl: './show-excursion-temp.component.html',
  styleUrls: ['./show-excursion-temp.component.css']
})
export class ShowExcursionTempComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }

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

id:number=1
 


showExcursionTemp(id:number){
       this.petitionServ.showExcursionTemp(id)
              .subscribe((resp:ApiTemplateShow)=>{this.excursionTempFromApi=resp})
  }

}
