import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingModal } from '../booking-modal/booking-modal';

interface Seat {
  id: number;
  status: 'available' | 'booked' | 'selected';
}

interface PassengerDetails {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-movie-booking',
  standalone: true,
  imports: [CommonModule, BookingModal],
  templateUrl: './movie-booking.html',
  styleUrls: ['./movie-booking.css'],
})
export class MovieBooking {
  ticketPrice = 200;
  showModal = false;

  bookedSeats = [1, 5, 8, 12, 19, 25];

  // Create 50 seats
  seats: Seat[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    status: this.bookedSeats.includes(i + 1) ? 'booked' : 'available',
  }));

  // Divide seats into 5 rows
  seatRows: Seat[][] = [];

  constructor() {
    for (let i = 0; i < this.seats.length; i += 10) {
      this.seatRows.push(this.seats.slice(i, i + 10));
    }
  }

  // Get selected seats
  get selectedSeats() {
    return this.seats.filter((seat) => seat.status === 'selected');
  }

  // Calculate total price
  get totalPrice() {
    return this.selectedSeats.length * this.ticketPrice;
  }

  // Select or deselect seat
  onSeatClick(seat: Seat) {
    if (seat.status === 'booked') {
      return;
    }

    seat.status = seat.status === 'selected' ? 'available' : 'selected';
  }

  // Open modal
  openModal() {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }

    this.showModal = true;
  }

  // Receive passenger details from child
  confirmBooking(details: PassengerDetails) {
    this.selectedSeats.forEach((seat) => {
      seat.status = 'booked';
    });

    this.showModal = false;

    alert(`Booking successful! Thank you, ${details.name}`);
  }

  // Close modal
  closeModal() {
    this.showModal = false;
  }
}
