import { Component,TemplateRef,Directive,ElementRef,HostListener  } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  isDarkMode = false;

  constructor (
    private AuthService: AuthService,
    private router: Router,
    private el: ElementRef,
  ) {}

  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
  }

  onSubmit() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('token'));
  }
}
