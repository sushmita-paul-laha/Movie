import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Seat {
  id: number;
  status: 'available' | 'booked' | 'selected';
}

interface PassengerDetails {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-modal.html',
  styleUrls: ['./booking-modal.css'],
})
export class BookingModal {
  @Input() selectedSeats: Seat[] = [];
  @Input() totalPrice = 0;

  @Output() confirmed = new EventEmitter<PassengerDetails>();
  @Output() closed = new EventEmitter<void>();

  passengerName = '';
  phoneNumber = '';

  confirmBooking() {
    if (!this.passengerName.trim()) {
      alert('Please enter passenger name');
      return;
    }

    if (!/^\d{10}$/.test(this.phoneNumber)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    this.confirmed.emit({
      name: this.passengerName.trim(),
      phone: this.phoneNumber,
    });
  }

  closeModal() {
    this.closed.emit();
  }
}
