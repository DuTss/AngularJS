import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(pseudo: string, mdp: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}user/login`, { pseudo, mdp }, this.httpOptions)
      .pipe(
        map((response) => {
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.router.navigate(['/annonces']);
          }
          return response;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getToken(): string | null {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser.token || null;
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}user/register`, user, this.httpOptions)
      .pipe(
        map((response) => {
          if (response && response.token) {
            user.AuthToken = [response.token];
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  updateUser(user: any): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.put<any>(`${this.apiUrl}/users/${user._id}`, user, { headers: headers })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deleteUser(id: string): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`, { headers: headers })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  getUserById(id: string): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/users/${id}`, { headers: headers })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
