import { Restaurant } from "../../shared/model/restaurant";
import { Review } from "../../shared/model/review";

export interface DataState {
    restaurants: Array<Restaurant>;
    neighborhoods: Array<string>;
    cuisines: Array<string>;
}

export const INITIAL_DATA_STATE: DataState = {
    restaurants: [],
    neighborhoods: [],
    cuisines: []
};