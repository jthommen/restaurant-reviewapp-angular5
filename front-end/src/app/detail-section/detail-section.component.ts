import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../store/application-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../shared/model/restaurant';
import { restaurantByIdSelector } from './restaurantByIdSelector';
import { LoadRestaurantDataAction } from '../store/actions';

@Component({
  selector: 'detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.css']
})
export class DetailSectionComponent implements OnInit {

  restaurant$: Observable<Restaurant>;

  constructor(private store: Store<ApplicationState>) { 

    this.restaurant$ = store.select(restaurantByIdSelector)

  }

  ngOnInit() {
    let restaurants;
    const subscription = this.store.subscribe(state => restaurants = state.dataState.restaurants);

    if(restaurants.length === 0) {
      this.store.dispatch(new LoadRestaurantDataAction());
    }

    subscription.unsubscribe();
  }

}
