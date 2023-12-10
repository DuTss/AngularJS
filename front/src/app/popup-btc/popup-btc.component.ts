import { Component } from '@angular/core';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-btc',
  templateUrl: './popup-btc.component.html',
  styleUrls: ['./popup-btc.component.css']
})
export class PopupBtcComponent {
  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    public dialog: MatDialog
    ) {}

  closePopUp(): void {
    this.dialog.closeAll();
    console.log("closePopUp");
  }
}
