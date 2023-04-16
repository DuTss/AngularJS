import { Component } from '@angular/core';
import { PopupBtcComponent } from '../popup-btc/popup-btc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  modalRef: BsModalRef | undefined;

  constructor (
    private modalService: BsModalService,
    public dialog: MatDialog
  ) {}

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupBtcComponent, {
      width: '250px', // Largeur de la fenêtre modale
      height: 'auto', // Hauteur de la fenêtre modale
      panelClass: 'my-dialog', // Ajoutez une classe CSS personnalisée pour votre fenêtre modale
      data: { name: 'Nom de l\'utilisateur' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La popup a été fermée');
    });
  }
}
