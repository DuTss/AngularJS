import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(
    private annonceService: AnnonceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<Annonce[]>('http://localhost:3001/post')
      .subscribe(annonces => this.annonces = annonces);
  }

  uneAnnonce(id: string) {
    this.annonceService.getAnnonce(id).subscribe(
      
    );

  }

  deleteAnnonce(id: string) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(() => {
        // Recharge la page
        location.reload()
      });
  }
}
