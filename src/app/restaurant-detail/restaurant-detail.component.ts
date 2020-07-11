import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurant/restaurant.service';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: RestaurantModel;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
