import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-show-list-excursion',
  templateUrl: './show-list-excursion.component.html',
  styleUrls: ['./show-list-excursion.component.css']
})
export class ShowListExcursionComponent implements OnInit {

  constructor(private petitionServ:PetitionService,
              private modalService: NgbModal) { }


  ngOnInit(): void {
    this.petitionServ.showList()
  }

get excursionListFromAPI(){
  return this.petitionServ.excursionListFromAPI
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


  deleteExcursion(id_excursion:string){
        this.petitionServ.deleteExcursion(parseInt(id_excursion))
                .subscribe((resp)=>{
                  alert(JSON.stringify(resp.message,null,4))
                  if(resp.status===200) {
                    this.petitionServ.showList()
                   }
                 }) 
    }
  




}
