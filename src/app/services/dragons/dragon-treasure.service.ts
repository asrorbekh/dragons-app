import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {ResponseFormat} from "../../enums/format/response-format";
import { Store } from '@ngrx/store';
import {loadDragonTreasures, loadDragonTreasuresFailure, loadDragonTreasuresSuccess} from '../../app.store';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class DragonTreasureService {

  private http = inject(HttpClient);
  private store = inject(Store);

  getDragonTreasures(responseFormat: ResponseFormat = ResponseFormat.JSON): Observable<DragonTreasure>{
    return this.http.get<DragonTreasure>(`${baseURL}/dragon_treasures.${responseFormat}`);
  }

  getDragonTreasuresStore(responseFormat: ResponseFormat = ResponseFormat.JSON): Observable<DragonTreasure[]> {
    this.store.dispatch(loadDragonTreasures());
    return this.http.get<DragonTreasure[]>(`${baseURL}/dragon_treasures.${responseFormat}`).pipe(
      tap((treasures) => this.store.dispatch(loadDragonTreasuresSuccess({ treasures }))),
      catchError((error) => {
        this.store.dispatch(loadDragonTreasuresFailure({ error }));
        return throwError(()=> error.message);
      })
    );
  }
}
