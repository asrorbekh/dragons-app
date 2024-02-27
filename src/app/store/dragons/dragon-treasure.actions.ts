import { createAction, props } from '@ngrx/store';
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";

export const loadDragonTreasures = createAction('[DragonTreasure] Load Dragon Treasures');
export const setDragonTreasures = createAction('[DragonTreasure] Set Dragon Treasures', props<{ treasures: DragonTreasure[] }>());
