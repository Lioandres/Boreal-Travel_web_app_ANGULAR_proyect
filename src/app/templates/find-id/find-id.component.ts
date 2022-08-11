import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/interfaces/show.interface';
import { ExcursionTemplate } from 'src/app/interfaces/templateList.interface';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.component.html',
  styleUrls: ['./find-id.component.css']
})
export class FindIdComponent implements OnInit {

  constructor(private petitionServ:PetitionService) { }

  ngOnInit(): void {
  }


id:number=1
 
get respShow (){
  return this.petitionServ.respShow
}

getExcursionTemp(id:number){
  this.petitionServ.getExcursionTemp(id)
}

}
