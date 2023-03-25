import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Annonce[]>('http://localhost:3001/post')
      .subscribe(annonces => this.annonces = annonces);
  }
}
