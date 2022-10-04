import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PetitionService } from '../../services/petition.service';

@Component({
  selector: 'app-show-lits-temp',
  templateUrl: './show-lits-temp.component.html',
  styleUrls: ['./show-lits-temp.component.css']
})
export class ShowLitsTempComponent implements OnInit {
  [x: string]: any;

  constructor(private petitionServ:PetitionService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.petitionServ.showListTemp()
  }

get excursionListTempFromAPI(){
  return this.petitionServ.excursionListTempFromAPI
}




//Modal
closeResult = '';

 

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',
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


  deleteExcursionTemp(id_temp:string){
    this.petitionServ.deleteExcursionTemp(parseInt(id_temp))
            .subscribe((resp)=>{
              alert(JSON.stringify(resp.message,null,4))
              if(resp.status===200) {
                this.petitionServ.showListTemp()
               }
             }) 
}



}
