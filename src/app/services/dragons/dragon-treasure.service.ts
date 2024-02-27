import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {ResponseFormat} from "../../enums/format/response-format";
import { Store } from '@ngrx/store';
import {AppState} from "../../app.state";
import {setDragonTreasures} from "../../store/dragons/dragon-treasure.actions";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class DragonTreasureService {

  private http = inject(HttpClient);

  constructor(private store: Store<AppState>) { }

  getDragonTreasures(responseFormat: ResponseFormat = ResponseFormat.JSONLD): Observable<DragonTreasure>{
    return this.http.get<DragonTreasure>(`${baseURL}/dragon_treasures.${responseFormat}`);
  }

  getDragonTreasuresStore(responseFormat: ResponseFormat = ResponseFormat.JSONLD): void {
    this.http.get<DragonTreasure[]>(`${baseURL}/dragon_treasures.${responseFormat}`).subscribe(
      treasures => {
        this.store.dispatch(setDragonTreasures({ treasures }));
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
