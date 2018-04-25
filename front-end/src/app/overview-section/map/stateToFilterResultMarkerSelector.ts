import { ApplicationState } from "../../store/application-state";
import * as _ from 'lodash';
import { MapMarkerVM } from "./map-marker.vm";

export function stateToFilterResultMarkerSelector(state: ApplicationState) {

    let results: MapMarkerVM[] = [];
    const cuisineFilter = state.uiState.filterCuisines;
    const neighborhoodFilter = state.uiState.filterNeighborhoods;

    if(cuisineFilter === 'All' && neighborhoodFilter === 'All'){

        _.map(state.dataState.restaurants, function(restaurant) {
            let mapMarker = {
                lat: restaurant.latlng.lat,
                lng: restaurant.latlng.lng,
                name: restaurant.name,
                id: restaurant.id
            };

            results.push(mapMarker);
        });

    } else {

        _.map(state.dataState.restaurants, function(restaurant) {
    
            if(
                (cuisineFilter === restaurant.cuisine_type || cuisineFilter === 'All') &&
                (neighborhoodFilter === restaurant.neighborhood || neighborhoodFilter === 'All')
            ) {
                let mapMarker = {
                    lat: restaurant.latlng.lat,
                    lng: restaurant.latlng.lng,
                    name: restaurant.name,
                    id: restaurant.id
                };
    
                results.push(mapMarker);
            }
        });

    }

    results = _.without(results, undefined);

    return results;

}