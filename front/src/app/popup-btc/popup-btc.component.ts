import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup-btc',
  templateUrl: './popup-btc.component.html',
  styleUrls: ['./popup-btc.component.css']
})
export class PopupBtcComponent {


  constructor(public modalRef: BsModalRef) {}

  hide() {
    
  }
}
