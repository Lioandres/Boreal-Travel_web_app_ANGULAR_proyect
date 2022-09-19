import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  @Output() isPaymentFormFilled= new EventEmitter<boolean>()

  paymentForm:FormGroup= this.fb.group({
    cardName:["",[Validators.required,Validators.minLength(2)]],
    cardNumber:["",[Validators.required,Validators.minLength(2)]],
    expirationDate:["",[Validators.required,Validators.pattern('^[0-9]{2}-[0-9]{4}$')]],
    CVV:["",[Validators.required,Validators.pattern('^[0-9]{3}$')]], 
  })
  

  pay(){
    this.paymentForm.markAllAsTouched()
    if (this.paymentForm.valid) {
     this.isPaymentFormFilled.emit(true)
      }
    else{
      alert("Rellene todo los campos correctamente")
    
  
      }
  }
}
