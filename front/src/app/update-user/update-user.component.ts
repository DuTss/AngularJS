import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
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
      console.log("INIT ==> ", this.user);
      
    })
  }

  onSubmit() {
    if (this.user != null) {
      const token = this.user.AuthTokens[0].AuthToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.put(`http://localhost:3001/user/${this.user._id}`, this.user,{headers})
        .subscribe(
          res => {
            console.log(res);
            window.location.href = 'http://localhost:4201/profil';
          },
          err => console.log(err)
        );
    }
  }
}
