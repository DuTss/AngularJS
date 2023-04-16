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
  isFavorite: boolean = false;
  currentUser: any;

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

  toggleFavorite(annonceId: string): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.isFavorite = !this.isFavorite;
    console.log("THIS ANNONCES => ",this.annonces);

    if (this.isFavorite) {
      this.AuthService.addFavoris(this.currentUser.user._id,annonceId).subscribe();
    } else {
      this.AuthService.removeFavoris(this.currentUser.user._id,annonceId).subscribe();
    }
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
