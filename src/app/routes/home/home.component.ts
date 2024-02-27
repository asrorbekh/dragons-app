import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private movieService = inject(DragonTreasureService);

  errorMessage: string|boolean = false;
  isLoading: boolean = false;
  dragonTreasures: DragonTreasure[] = [];

  ngOnInit(): void {
    this.loadDragonTreasure();
  }

  loadDragonTreasure() {
    this.isLoading = true;

    this.movieService.getDragonTreasures().subscribe({
      next: (response: any) => {
        if (response.hasOwnProperty('hydra:member')) {
          this.dragonTreasures = response['hydra:member'] as DragonTreasure[];
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
