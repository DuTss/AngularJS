import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
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
    })
  }

  onSubmit() {
    if (this.user != null) {
      this.http.put(`http://localhost:3001/post/${this.user._id}`, this.user)
        .subscribe(
          res => {
            console.log(res);
            window.location.href = 'http://localhost:4201/users';
          },
          err => console.log(err)
        );
    }
  }
}
