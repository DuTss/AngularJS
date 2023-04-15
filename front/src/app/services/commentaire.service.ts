import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:3001/commentaire';

  constructor(private http: HttpClient) {}

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.apiUrl);
  }

  getCommentaire(id: string): Observable<Commentaire> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Commentaire>(url);
  }

  addCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiUrl, commentaire);
  }

  updateCommentaire(id: string, commentaire: Commentaire): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, commentaire);
  }

  deleteCommentaire(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
