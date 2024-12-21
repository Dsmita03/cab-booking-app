import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cab-search',
  standalone: true, // Mark the component as standalone
  imports: [FormsModule,CommonModule], // Add FormsModule here
  templateUrl: './cab-search.component.html',
  styleUrls: ['./cab-search.component.css']
})
export class CabSearchComponent {
  pickupLocation: string = '';
  destination: string = '';
  result: string | null = null;

  searchCab(): void {
    if (this.pickupLocation && this.destination) {
      this.result = `Searching for cabs from "${this.pickupLocation}" to "${this.destination}".`;
    } else {
      this.result = null;
    }
  }
}
