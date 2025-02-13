import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  email: string = '';
  password: string = '';
  selectedRole: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password || !this.selectedRole) {
      alert('Please fill in all fields.');
      return;
    }

    const routes: { [key: string]: string } = {
      user: '/cab/home',
      admin: '/admin/dashboard',
      service: '/service/cab-service',
    };

    const route = routes[this.selectedRole];

    if (route) {
      this.router.navigate([route]);
    } else {
      console.error('Invalid role selected');
    }
  }
}
