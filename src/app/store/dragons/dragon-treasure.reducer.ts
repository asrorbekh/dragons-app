import { createReducer, on } from '@ngrx/store';
import * as DragonTreasureActions from './dragon-treasure.actions';
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";

export interface DragonTreasureState {
  treasures: DragonTreasure[];
  loading: boolean;
  error: any;
}

export const initialState: DragonTreasureState = {
  treasures: [],
  loading: false,
  error: null,
};

export const dragonTreasureReducer = createReducer(
  initialState,
  on(DragonTreasureActions.loadDragonTreasures, (state) => {
    console.log('Reducer: Loading...');
    return { ...state, loading: true };
  }),
  on(DragonTreasureActions.loadDragonTreasuresSuccess, (state, { treasures }) => {
    console.log('Reducer: Success', treasures);
    return { ...state, treasures, loading: false, error: null };
  }),
  on(DragonTreasureActions.loadDragonTreasuresFailure, (state, { error }) => {
    console.error('Reducer: Failure', error);
    return { ...state, loading: false, error };
  }),
);
