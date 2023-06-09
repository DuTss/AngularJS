import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  currentUser: any;
  user: User= {} as User;

  constructor (
    private AuthService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = this.currentUser.user._id;
    console.log(userId);
    this.AuthService.getUserById(userId).subscribe((user: User) => {
      this.user = user
    })
  }

  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }

  onSubmit() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('token'));
  }
}
