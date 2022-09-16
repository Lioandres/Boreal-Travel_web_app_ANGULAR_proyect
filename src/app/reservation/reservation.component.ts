import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';
import { repetedMails } from '../Shared/repetedMail';
import { ApiReservationBody } from '../interfaces/apiReservationBody.interface';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private auxServ:AuxService,
              private petitionServ:PetitionService,
              private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  
  get excursionListTempFromAPI (){
    return this.petitionServ.excursionListTempFromAPI  
  }


  get repositoryCart (){
    return this.auxServ.repositoryCart
  }


removeExcursion(i:number){
    this.auxServ.repositoryCart.splice(i,1);    
   
}

lookIndexTemp(id_template:string):number{
  return this.petitionServ.lookIndexTemp(id_template) 
 }




isReserveFormFilled:boolean=false

reserveForm:FormGroup= this.fb.group({
  name:["",[Validators.required,Validators.minLength(2)]],
  lastName:["",[Validators.required,Validators.minLength(2)]],
  email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
  emailRepete:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.minLength(5)]],
  phone:["",[Validators.required,Validators.minLength(9)]]
  
},{
 validators: [repetedMails()]
})

continue():void {
  this.reserveForm.markAllAsTouched()
  if (this.reserveForm.valid && this.repositoryCart.length!=0) {
   this.isReserveFormFilled=true
    }
  else {
    alert("Rellene todo los campos correctamente")
    if(this.repositoryCart.length===0){ alert('debe elegir una excursion')}
    }
}

 
isPaymentFormFilled:boolean=false
isReservationOK:boolean=false
reserId:string=""
confirmReserve(eventData:boolean) {
  this.isPaymentFormFilled=eventData
  if (this.repositoryCart.length===0) return alert('debe elegir una excursion') 
  if(this.isPaymentFormFilled){
    this.repositoryCart.forEach(item=>{
      let reservation:ApiReservationBody={
              excursion_id:parseInt(item.excursion.id_excursion),
              payment_id:11111,
              name:this.reserveForm.get('name')?.value,
              last_name:this.reserveForm.get('lastName')?.value,
              email:this.reserveForm.get('email')?.value,
              phone:this.reserveForm.get('phone')?.value,
              num_people:item.numberPeople
              }
        this.petitionServ.addReserve(reservation)
              .subscribe((resp)=>{alert(JSON.stringify(resp.message,null,4))
                                  this.reserId=resp.data
                                  this.isReservationOK=!resp.error})
      })
    }
  this.auxServ.repositoryCart=[]
 }

}
