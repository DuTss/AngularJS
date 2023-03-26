import { Component } from '@angular/core';
import { Annonce } from '../models/annonce';
import { HttpClient } from '@angular/common/http';
import { AnnonceService } from '../services/annonce.service';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent {
  annonce: Annonce= {} as Annonce;

    constructor(
      private annonceService: AnnonceService,
      private route: ActivatedRoute,
      private http: HttpClient
    ) {}

    ngOnInit() {
      // ?? Cela permet de définir une chaîne vide ('') comme valeur par défaut si l'ID est nul,
      // ce qui permet de passer une valeur de chaîne à la méthode get().
      const id = this.route.snapshot.paramMap.get('id') ??'';
      this.http.get<Annonce[]>(`http://localhost:3001/post/${id}`)
        .subscribe(annonce => annonce = annonce);
        this.annonceService.getAnnonce(id).subscribe((annonce: Annonce) => {
          this.annonce = annonce;
      });
    }

    onSubmit() {
      if (this.annonce != null) {
        this.http.put(`http://localhost:3001/post/${this.annonce._id}`, this.annonce)
          .subscribe(
            res => {
              console.log(res);
              alert('L\'annonce a été modifiée avec succès !');
            },
            err => console.log(err)
          );
      }
    }
}
