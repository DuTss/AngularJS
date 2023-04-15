import { Component,TemplateRef } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopupBtcComponent } from './popup-btc/popup-btc.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  modalRef: BsModalRef | undefined;

  constructor (
    private AuthService: AuthService,
    private router: Router,
    private modalService: BsModalService,
    public dialog: MatDialog
  ) {}

  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }

  onSubmit() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('token'));
  }

  myProfil() {
    
  }

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
