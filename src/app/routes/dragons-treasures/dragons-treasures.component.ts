import {Component, inject, OnInit} from '@angular/core';
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dragons-treasures',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dragons-treasures.component.html',
  styleUrl: './dragons-treasures.component.css'
})
export class DragonsTreasuresComponent implements OnInit {
  private dragonTreasureService = inject(DragonTreasureService);

  errorMessage: string|boolean = false;
  isLoading: boolean = false;
  dragonTreasures: DragonTreasure[] = [];
  totalTreasures: number = 0;
  title: string = '';

  ngOnInit(): void {
    this.loadDragonTreasure();
  }

  loadDragonTreasure() {
    this.isLoading = true;

    this.dragonTreasureService.getDragonTreasures().subscribe({
      next: (response: any) => {
        if (response.hasOwnProperty('hydra:member')) {
          this.dragonTreasures = response['hydra:member'] as DragonTreasure[];
          this.totalTreasures = this.dragonTreasures?.length;
        } else if (Array.isArray(response)) {
          this.dragonTreasures = response as DragonTreasure[];
        } else {
          this.errorMessage = 'Invalid response format';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.statusText || 'An error occurred';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
