import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor (private AuthService: AuthService) {}
  isAuthenticated(): boolean {
    return this.AuthService.getToken() !== null;
  }
}
