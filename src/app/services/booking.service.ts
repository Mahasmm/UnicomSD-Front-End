import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseApiUrl: string = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  addBooking(addBookingRequest:booking){
    addBookingRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<booking>(this.baseApiUrl +'/api/booking', addBookingRequest)
  }
}
