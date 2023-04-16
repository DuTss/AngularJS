import { Component,TemplateRef } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';

  constructor (
    private AuthService: AuthService,
    private router: Router,
  ) {}

  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }

  onSubmit() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('token'));
  }
}
