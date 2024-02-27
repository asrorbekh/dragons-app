import { createReducer, on } from '@ngrx/store';
import { setDragonTreasures } from './dragon-treasure.actions';
import {AppState} from "../../app.state";

export const initialState: AppState = {
  dragonTreasures: [],
};

export const dragonTreasureReducer = createReducer(
  initialState,
  on(setDragonTreasures, (state, { treasures }) => ({ ...state, dragonTreasures: treasures }))
);
