import { ApplicationState } from "../store/application-state";
import { Restaurant } from "../../shared/model/restaurant";
import * as _ from 'lodash';

export function restaurantByIdSelector(state: ApplicationState) {

    let result: Restaurant;

    result = _.find(state.dataState.restaurants, function(restaurant) {
        return restaurant.id === parseInt(state.routerReducer.state.params.id);
    });

    return result;
}