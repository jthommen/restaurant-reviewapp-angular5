import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../store/application-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../shared/model/restaurant';
import { Review } from '../../shared/model/review';
import { restaurantByIdSelector } from './restaurantByIdSelector';
import { LoadRestaurantDataAction } from '../store/actions';
import { LoadReviewsDataAction } from '../store/actions';
import { routerReducer } from '@ngrx/router-store';

@Component({
  selector: 'detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.css']
})
export class DetailSectionComponent implements OnInit {

  restaurant$: Observable<Restaurant>;
  reviews$: Observable<Review[]>;

  constructor(private store: Store<ApplicationState>) { 

    this.restaurant$ = store.select(restaurantByIdSelector);

  }

  ngOnInit() {
    let restaurants;
    let restaurantId;

    const subscription = this.store.subscribe(state => {
      restaurants = state.dataState.restaurants;
      restaurantId = state.routerReducer.state.params.id;
    });

    if(restaurants.length === 0) {
      this.store.dispatch(new LoadRestaurantDataAction());
    }

    this.store.dispatch(new LoadReviewsDataAction(restaurantId));

    subscription.unsubscribe();
  }

}
