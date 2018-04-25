import { ApplicationState } from "../../store/application-state";
import { Restaurant } from "../../../shared/model/restaurant";
import * as _ from 'lodash';

export function stateToFilterResultRestaurantSelector(state: ApplicationState) {

    let results: Restaurant[] = [];
    const cuisineFilter = state.uiState.filterCuisines;
    const neighborhoodFilter = state.uiState.filterNeighborhoods;

    if(cuisineFilter === 'All' && neighborhoodFilter === 'All'){
        results = state.dataState.restaurants;
    } else {
        _.map(state.dataState.restaurants, function(restaurant) {

            if(
                (cuisineFilter === restaurant.cuisine_type || cuisineFilter === 'All') &&
                (neighborhoodFilter === restaurant.neighborhood || neighborhoodFilter === 'All')
            ) {
                results.push(restaurant);
            }
        });
    }

    results = _.without(results, undefined);
    
    return results;
}