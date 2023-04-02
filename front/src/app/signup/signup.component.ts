import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = {
    _id : '',
    pseudo: '',
    lieu: '',
    mdp: ''
  };

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.AuthService.register(this.user).subscribe(() => {
      // Rediriger vers la page /annonces
      console.log(this.user);
      this.router.navigateByUrl('/annonces');
      const token = localStorage.getItem('token');
      console.log(token);
    });
  }
}
