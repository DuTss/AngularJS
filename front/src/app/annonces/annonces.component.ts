import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce';
import { User } from '../models/user';
import { AnnonceService } from '../services/annonce.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  user: User[]= [];
  isFavorite: boolean | undefined;
  currentUser: any;
  isUser: boolean | undefined;

  constructor(
    private annonceService: AnnonceService,
    private AuthService: AuthService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.get<Annonce[]>('http://localhost:3001/post')
    .subscribe(annonces => this.annonces = annonces);
  }

  toggleFavorite(annonceId: string) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = this.currentUser.user._id;

    this.AuthService.getUser(userId).subscribe(user => {
      const isFavorite = user.favoris.indexOf(annonceId);
      if (isFavorite === -1) {
        // L'annonce n'est pas dans la liste des favoris de l'utilisateur
        this.currentUser.user.favoris.push(annonceId);
        this.AuthService.addFavoris(userId, annonceId).subscribe();
        this.isFavorite = true;
      } else {
        const annonceIndex = user.favoris.indexOf(annonceId);
        this.currentUser.user.favoris.splice(annonceIndex, 1);
        this.AuthService.removeFavoris(userId, annonceId).subscribe();
        this.isFavorite = false;
      }
    });
  }

  uneAnnonce(id: string) {
    this.annonceService.getAnnonce(id).subscribe();
  }

  deleteAnnonce(id: string) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(() => {
        // Recharge la page
        location.reload()
      });
  }
}
