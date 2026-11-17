import { Component, signal } from '@angular/core';
import { MovieBooking } from './features/components/movie-booking/movie-booking';

@Component({
  imports: [MovieBooking],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movie-booking');
}
