import { Injectable } from '@angular/core';
import {Booking} from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 1,
      placeId: 2,
      placeTitle: 'tehran',
      userId: 1,
      guestNumber: 2,
    }
  ];
  constructor() { }
  get booking() {
    return [...this._bookings];
  }
}
