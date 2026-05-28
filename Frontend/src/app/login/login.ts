import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user_id = '';
  errorMsg = '';

  constructor(private router: Router) {}

  login() {
    const trimmed = this.user_id.trim();
    if (!trimmed) {
      this.errorMsg = 'Please enter a user ID.';
      return;
    }
    if (typeof window !== 'undefined') {
  window.localStorage.setItem('user_id', trimmed);
}
    this.router.navigate(['/dashboard']);
  }
}