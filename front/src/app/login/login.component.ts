import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pseudo: string = "";
  mdp: string = "";
  errorMsg = '';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.pseudo, this.mdp)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error.error.message);
          // Affichez une erreur de connexion à l'utilisateur
          this.errorMsg = error.error.message;
        }
      );
  }
}
