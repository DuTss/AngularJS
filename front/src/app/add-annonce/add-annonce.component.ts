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
    image: [],
  };
  currentUser: any;


  constructor(
    private annonceService: AnnonceService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  // Déclarez un tableau d'images dans votre composant
images: File[] = [];


// Modifiez la méthode onImageSelect pour gérer plusieurs images
onImageSelect(event: any,fileInput:any) {
  const files = event.target.files;
  if (files) {
    for (const file of files) {
      // Vous pouvez utiliser une logique pour télécharger les images sur votre serveur ici
      // Enregistrez le nom de fichier ou l'URL dans le tableau des images
      //  this.annonce.image.push(file.name);
      this.annonce.image.push(file)
      
    }
    fileInput.value = null;
  }
}
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);
    this.annonce.ajouter_par = this.currentUser.user.pseudo;
    return this.currentUser.user.pseudo
  }

  onSubmit() {
    const formData = new FormData();
    const { titre, description, lieu, prix, ajouter_par, image } = this.annonce;

    formData.append('titre', titre);
    formData.append('description', description);
    formData.append('lieu', lieu);
    formData.append('prix', prix.toString());
    formData.append('ajouter_par', ajouter_par);

    for (const img of image) {
      console.log("image", img);
      formData.append('images', img);
      if (typeof image[0] === 'object') {
        // Handle the case where image[0] is an object
        formData.append('image', (image[0] as { name: string }).name.toString());
      } else {
        // Handle the error case where image[0] is not an object
      }
    }
    this.annonceService.addAnnonce(formData).subscribe(() => {
      this.router.navigateByUrl('/annonces');
    });
  }
}
