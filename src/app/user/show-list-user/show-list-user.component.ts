import { Component, OnInit } from '@angular/core';
import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';
import { apiUserRole } from '../../interfaces/apiUserRole.interface';

@Component({
  selector: 'app-show-list-user',
  templateUrl: './show-list-user.component.html',
  styleUrls: ['./show-list-user.component.css']
})
export class ShowListUserComponent implements OnInit {

  constructor(private petitionServ:PetitionService,
             ) { }

  ngOnInit(): void {
    this.petitionServ.showListUser()
    
  }

get userListFromAPI(){
  return this.petitionServ.userListFromAPI
}

user_role:string=""

changeRole(body:apiUserRole){
    
    this.petitionServ.changeRole(body)
          .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                            this.petitionServ.showListUser()
            
          })
  

}




  

}
