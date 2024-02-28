import {Component, inject, OnInit} from '@angular/core';
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {
  selectDragonTreasureError,
  selectDragonTreasureLoading,
  selectDragonTreasures
} from "../../store/dragons/dragon-treasure.selectors";
import {Store} from "@ngrx/store";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dragons-treasures',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './dragons-treasures.component.html',
  styleUrl: './dragons-treasures.component.css'
})
export class DragonsTreasuresComponent implements OnInit {
  title: string = 'Dragon store treasures';

  treasures$: Observable<DragonTreasure[]> = this.store.select(selectDragonTreasures);
  loading$: Observable<boolean> = this.store.select(selectDragonTreasureLoading);
  error$: Observable<any> = this.store.select(selectDragonTreasureError);
  public totalTreasures: number = 0;

  constructor(private dragonTreasureService: DragonTreasureService, private store: Store) {}

  ngOnInit() {
    this.dragonTreasureService.getDragonTreasuresStore().subscribe(
      treasures => this.totalTreasures = treasures.length
    );
  }
}
