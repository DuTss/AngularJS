import { Component } from '@angular/core';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';

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

  constructor(private annonceService: AnnonceService) {}

  onSubmit() {
    this.annonceService.addAnnonce(this.annonce).subscribe(() => {
      // Reset the form
      this.annonce = {
        _id: '',
        titre: '',
        description: '',
        lieu: '',
        prix: 0,
        flag: false
      };
    });
  }
}
