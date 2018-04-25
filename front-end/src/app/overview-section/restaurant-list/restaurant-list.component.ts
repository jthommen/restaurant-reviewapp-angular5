import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/application-state';
import { LoadRestaurantDataAction } from '../../store/actions';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../../shared/model/restaurant';
import { stateToFilterResultRestaurantSelector } from './stateToFilterResultRestaurantSelector';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;

  constructor(private store: Store<ApplicationState>) { 

    this.restaurants$ = store.select(stateToFilterResultRestaurantSelector);
  }

  ngOnInit() {
    this.store.dispatch(new LoadRestaurantDataAction());
  }

}
