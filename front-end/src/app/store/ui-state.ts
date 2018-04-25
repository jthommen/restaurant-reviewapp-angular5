export interface UiState {
    filterNeighborhoods: string;
    filterCuisines: string;
}

export const INITIAL_UI_STATE: UiState = {
    filterNeighborhoods: 'All',
    filterCuisines: 'All'
}