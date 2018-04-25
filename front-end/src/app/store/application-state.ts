import { DataState, INITIAL_DATA_STATE } from "./data-state";
import { UiState, INITIAL_UI_STATE } from "./ui-state";
import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./custom-router-serializer";

export interface ApplicationState {
    dataState: DataState,
    uiState: UiState,
    routerReducer: RouterReducerState<RouterStateUrl>
};

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    dataState: INITIAL_DATA_STATE,
    uiState: INITIAL_UI_STATE,
    routerReducer: undefined
};