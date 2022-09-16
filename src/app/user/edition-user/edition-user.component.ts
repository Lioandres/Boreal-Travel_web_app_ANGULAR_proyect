import { Component, OnInit } from '@angular/core';
import { AuxService } from 'src/app/services/general.service';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-edition-user',
  templateUrl: './edition-user.component.html',
  styleUrls: ['./edition-user.component.css']
})
export class EditionUserComponent implements OnInit {

  constructor(private petitionServ:PetitionService,
              private auxServ:AuxService) { }

  ngOnInit(): void {
    this.petitionServ.getProfile()
     .subscribe(resp=>{this.auxServ.logInUserRole=resp.data.profile.role
                        })
  }



}
