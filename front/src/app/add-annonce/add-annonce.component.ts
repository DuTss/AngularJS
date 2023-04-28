import { Component } from '@angular/core';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { FileSystemEntry,FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';

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
    image: '',
  };
  currentUser: any;


  constructor(
    private annonceService: AnnonceService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  onImageSelect(event: any) {
    const file = event.target.files[0];
    console.log("FILEEE => ", file);
    const formData = new FormData();
    formData.append('image',file);
    this.annonce.image = file;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);
    console.log(this.currentUser.user.pseudo);
    this.annonce.ajouter_par = this.currentUser.user.pseudo;
    return this.currentUser.user.pseudo
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('titre', this.annonce.titre);
    formData.append('description', this.annonce.description);
    formData.append('lieu', this.annonce.lieu);
    formData.append('prix', this.annonce.prix.toString());
    formData.append('ajouter_par', this.annonce.ajouter_par);
    formData.append('image', this.annonce.image);
  
    this.annonceService.addAnnonce(formData).subscribe(() => {
      console.log(this.annonce.image);
      // Rediriger vers la page /annonces
      this.router.navigateByUrl('/annonces');
    });
  }
}
