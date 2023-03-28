import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent {
  annonces: Annonce= {} as Annonce;

  constructor(
    private annonceService: AnnonceService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') ??'';
    console.log(id);
    this.http.get<Annonce[]>(`http://localhost:3001/post/${id}`)
      .subscribe(annonce => annonce = annonce);
      this.annonceService.getAnnonce(id).subscribe((annonce: Annonce) => {
        this.annonces = annonce;
    });
  }

  deleteAnnonce(id: string) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(() => {
        // Recharge la page
        location.reload()
      });
  }
}
