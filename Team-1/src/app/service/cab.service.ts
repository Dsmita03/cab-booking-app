import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '@mui/icons-material';

@Injectable({
  providedIn: 'root',
})
export class CabService{
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
   

  getCabs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Cabs`);
  }

  getBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Bookings`);
  }
}
 