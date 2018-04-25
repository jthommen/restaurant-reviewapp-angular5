import { Action } from '@ngrx/store';

import { DataState } from "../data-state";
import { RESTAURANT_DATA_LOADED_ACTION, RestaurantDataLoadedAction } from '../actions';
import * as _ from 'lodash';

export function dataState(state: DataState, action: Action): DataState {

    switch(action.type) {
        case RESTAURANT_DATA_LOADED_ACTION:
            return handleRestaurantDataLoadedAction(state, <any>action);

    default:
        return state;
    }
}

// Handler function to generate new states
function handleRestaurantDataLoadedAction(state: DataState, action: RestaurantDataLoadedAction): DataState {

    const newDataState: DataState = {
        restaurants: _.clone(state.restaurants),
        neighborhoods: _.clone(state.neighborhoods),
        cuisines: _.clone(state.cuisines)
    };

    newDataState.restaurants = action.payload;
    newDataState.neighborhoods = _.uniq(_.map(action.payload, 'neighborhood'));
    newDataState.cuisines = _.uniq(_.map(action.payload, 'cuisine_type'));

    return newDataState;
}