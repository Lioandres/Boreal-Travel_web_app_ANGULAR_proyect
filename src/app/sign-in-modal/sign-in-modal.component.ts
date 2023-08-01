import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css']
})
export class SignInModalComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal,
              private fb:FormBuilder,
              private auxServ:AuxService,
              private petitionServ:PetitionService,
              private route:Router) {};
  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content, {
    ariaLabelledBy: 'modal-basic-title',
    centered: true
  }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  logInForm:FormGroup= this.fb.group({
    user_email:["",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    user_password:["",[Validators.required,Validators.minLength(8)]],
  })

  logIn() {
    this.logInForm.markAllAsTouched()
      if (this.logInForm.valid) {
        this.modalService.dismissAll()
        this.petitionServ.logIn(this.logInForm.value)
          .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
                            if(resp.status===200) {
                              this.route.navigate(['home'])
                              this.auxServ.loggedIn=true
                              localStorage.setItem('token',resp.data.token)
                              this.petitionServ.getProfile()
                                  .subscribe(resp=>{
                                                    this.auxServ.logInUserRole=resp.data.profile.role
                                                    this.auxServ.id_user=resp.data.profile.id
                                                    this.auxServ.logInUser=resp.data.profile.name
                                  })
                             
                            };
                          })

      }
      else{
          
        alert("Rellene todo los campos correctamente")
      }
  }

}
