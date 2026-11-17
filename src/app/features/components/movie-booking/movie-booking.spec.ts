import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieBooking } from './movie-booking';

describe('MovieBooking', () => {
  let component: MovieBooking;
  let fixture: ComponentFixture<MovieBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
