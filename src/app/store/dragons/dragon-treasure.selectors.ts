import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DragonTreasureState } from './dragon-treasure.reducer';

export const selectDragonTreasureState = createFeatureSelector<DragonTreasureState>('dragonTreasure');

export const selectDragonTreasures = createSelector(
  selectDragonTreasureState,
  (state) => state.treasures
);

export const selectDragonTreasureLoading = createSelector(
  selectDragonTreasureState,
  (state) => state.loading
);

export const selectDragonTreasureError = createSelector(
  selectDragonTreasureState,
  (state) => state.error
);
