import {Component, inject, OnInit} from '@angular/core';
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dragons-treasures-http',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './dragons-treasures-http.component.html',
  styleUrl: './dragons-treasures-http.component.css'
})
export class DragonsTreasuresHttpComponent implements OnInit {
  private dragonTreasureService = inject(DragonTreasureService);

  errorMessage: string|boolean = false;
  isLoading: boolean = false;
  dragonTreasures: DragonTreasure[] = [];
  totalTreasures: number = 0;
  title: string = 'Dragon http treasures';

  ngOnInit(): void {
    this.loadDragonTreasure();
  }

  loadDragonTreasure() {
    this.isLoading = true;

    console.log('Loading:loadDragonTreasure')
    this.dragonTreasureService.getDragonTreasures().subscribe({
      next: (response: any) => {
        if (response.hasOwnProperty('hydra:member')) {
          this.dragonTreasures = response['hydra:member'] as DragonTreasure[];
          this.totalTreasures = this.dragonTreasures?.length;
          console.log('Success:loadDragonTreasure')
        } else if (Array.isArray(response)) {
          this.dragonTreasures = response as DragonTreasure[];
          this.totalTreasures = this.dragonTreasures?.length;
          console.log('Success:loadDragonTreasure')
        } else {
          this.errorMessage = 'Invalid response format';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.statusText || 'An error occurred';
        this.isLoading = false;
        console.log('Error:loadDragonTreasure')
      },
      complete: () => {
        this.isLoading = false;
        console.log('Finish:loadDragonTreasure')
      }
    });
  }
}
