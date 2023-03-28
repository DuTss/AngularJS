import { Component } from '@angular/core';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';

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
    flag: false
  };

  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) {}

  onSubmit() {
    this.annonceService.addAnnonce(this.annonce).subscribe(() => {
      // Rediriger vers la page /annonces
      this.router.navigateByUrl('/annonces');
    });
  }
}
