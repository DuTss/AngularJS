import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:3001/post';

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }

  getAnnonce(id: string): Observable<Annonce> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Annonce>(url);
  }

  addAnnonce(annonce: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce, {
    });
  }

  updateAnnonce(id: string, annonce: Annonce): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, annonce);
  }

  deleteAnnonce(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
