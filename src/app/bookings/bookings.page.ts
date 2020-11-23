import { Component, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Booking} from '../model/booking.model';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  public loadedBookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.booking;
  }

  onCancelBooking(id: number, slidingBooking: IonItemSliding) {
    slidingBooking.close();
  }
}
