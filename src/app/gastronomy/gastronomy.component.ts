import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastronomy',
  imports: [CommonModule],
  templateUrl: './gastronomy.component.html',
  styleUrl: './gastronomy.component.css'
})
export class GastronomyComponent {
  restaurants!: Restaurant[];

  constructor(private restaurantService: RestaurantServiceService){
    this.restaurants = restaurantService.getRestaurants();
  }
}
