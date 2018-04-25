import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../shared/model/restaurant';

@Component({
  selector: 'restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
