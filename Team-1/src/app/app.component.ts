import { Component } from '@angular/core';
import { CabSearchComponent } from './cab-search/cab-search.component'; // Import your standalone component

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [CabSearchComponent], // Import CabSearchComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
