import { Component } from '@angular/core';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { FileSystemEntry,FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent {
  annonce: Annonce = {
    _id : '',
    titre: '',
    description: '',
    lieu: '',
    prix: 0,
    flag: false,
    ajouter_par: '',
    // image:''
  };
  currentUser: any;


  constructor(
    private annonceService: AnnonceService,
    private router: Router,
    private authService: AuthService
  ) {}

  onImageSelect(event: any) {
    console.log("EVENT TARGET ==>  ",event.target);
    const file = event.target.files[0];
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);
    console.log(this.currentUser.user.pseudo);
    this.annonce.ajouter_par = this.currentUser.user.pseudo;
    return this.currentUser.user.pseudo
  }

  onSubmit() {
    this.annonceService.addAnnonce(this.annonce).subscribe(() => {
      // Rediriger vers la page /annonces
      this.router.navigateByUrl('/annonces');
    });
  }
}
