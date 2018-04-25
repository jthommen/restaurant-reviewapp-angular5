import { Action } from "@ngrx/store";
import { Restaurant } from "../../shared/model/restaurant";
import { Review } from "../../shared/model/review";

export const LOAD_RESTAURANT_DATA_ACTION = 'LOAD_RESTAURANT_DATA_ACTION';
export const RESTAURANT_DATA_LOADED_ACTION = 'RESTAURANT_DATA_LOADED_ACTION';
export const SELECT_FILTER_CUISINE_ACTION = 'SELECT_FILTER_CUISINE_ACTION';
export const SELECT_FILTER_NEIGHBORHOOD_ACTION  = 'SELECT_FILTER_NEIGHBORHOOD_ACTION';
export const LOAD_REVIEWS_DATA_ACTION = 'LOAD_REVIEWS_DATA_ACTION';
export const REVIEW_DATA_LOADED_ACTION = 'REVIEW_DATA_LOADED_ACTION';

export class LoadRestaurantDataAction implements Action {
    readonly type = LOAD_RESTAURANT_DATA_ACTION;

    constructor(){}
}

export class RestaurantDataLoadedAction implements Action {
    readonly type = RESTAURANT_DATA_LOADED_ACTION;

    constructor(public payload: Array<Restaurant>){}
}

export class SelectFilterCuisineAction implements Action {
    readonly type = SELECT_FILTER_CUISINE_ACTION;

    constructor(public payload: string) {}
}

export class SelectFilterNeighborhoodAction implements Action {
    readonly type = SELECT_FILTER_NEIGHBORHOOD_ACTION;

    constructor(public payload: string) {}
}

export class LoadReviewsDataAction implements Action {
    readonly type = LOAD_REVIEWS_DATA_ACTION;
    
    constructor(public payload: number) {}
}

export class ReviewDataLoadedAction implements Action {
    readonly type = REVIEW_DATA_LOADED_ACTION;

    constructor(public payload: Array<Review>){}
}
