import { Action } from '@ngrx/store';
import { UiState } from '../ui-state';
import { SELECT_FILTER_CUISINE_ACTION, SelectFilterCuisineAction, SELECT_FILTER_NEIGHBORHOOD_ACTION, SelectFilterNeighborhoodAction } from '../actions';
import * as _ from 'lodash';

export function uiState(state: UiState, action: Action): UiState {

    switch(action.type) {

        case SELECT_FILTER_CUISINE_ACTION:
            return handleSelectFilterCuisineAction(state, <any>action);

        case SELECT_FILTER_NEIGHBORHOOD_ACTION:
            return handleSelectFilterNeighborhoodAction(state, <any>action);

    default:
        return state;
    }
}

// Handler Functions for state changes
function handleSelectFilterCuisineAction(state: UiState, action: SelectFilterCuisineAction): UiState {
    const newUiState: UiState = _.clone(state);

    newUiState.filterCuisines = action.payload;
    
    return newUiState;
}

function handleSelectFilterNeighborhoodAction(state: UiState, action: SelectFilterNeighborhoodAction): UiState {
    const newUiState: UiState = _.clone(state);

    newUiState.filterNeighborhoods = action.payload;

    return newUiState;
}
