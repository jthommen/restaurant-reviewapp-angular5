import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { RestaurantService } from "../../services/restaurant.service";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { 
    LoadRestaurantDataAction, 
    LOAD_RESTAURANT_DATA_ACTION, 
    RestaurantDataLoadedAction, 
    LoadReviewsDataAction, 
    LOAD_REVIEWS_DATA_ACTION, 
    ReviewDataLoadedAction
} from "../actions";


@Injectable()
export class LoadRestaurantDataEffectService {
    
    constructor(
        private actions$: Actions,
        private restaurantService: RestaurantService){}

    @Effect() restaurantData$: Observable<Action> = this.actions$
        .ofType<LoadRestaurantDataAction>(LOAD_RESTAURANT_DATA_ACTION)
        .switchMap(action => this.restaurantService.loadAllRestaurantData())
        .map(restaurantData => new RestaurantDataLoadedAction(restaurantData));

    @Effect() reviewData$: Observable<Action> = this.actions$
        .ofType<LoadReviewsDataAction>(LOAD_REVIEWS_DATA_ACTION)
        .switchMap(action => this.restaurantService.loadReviewData(action.payload))
        .map(reviewData => new ReviewDataLoadedAction(reviewData));

}