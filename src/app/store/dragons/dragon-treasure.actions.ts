import { createAction, props } from '@ngrx/store';
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";

export const loadDragonTreasures = createAction('[DragonTreasure] Load Dragon Treasures');
export const loadDragonTreasuresSuccess = createAction('[DragonTreasure] Load Dragon Treasures Success', props<{ treasures: DragonTreasure[] }>());
export const loadDragonTreasuresFailure = createAction('[DragonTreasure] Load Dragon Treasures Failure', props<{ error: any }>());
