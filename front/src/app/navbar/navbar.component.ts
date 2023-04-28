import { Component  } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;

  constructor (
    private AuthService: AuthService,
  ) {}

  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
  }
}
