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
    mdp: '',
    favoris:[],
    AuthTokens: [{AuthToken : ''}]
  };
  errorMsg = '';

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.user.pseudo || !this.user.lieu || !this.user.mdp) {
      this.errorMsg = 'Veuillez remplir tous les champs obligatoires.';
      return;
    } else {
      this.AuthService.register(this.user).subscribe(() => {
        // Rediriger vers la page /annonces
        this.router.navigateByUrl('/annonces');
      });
    }

  }
}
