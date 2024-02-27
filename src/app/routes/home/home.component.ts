import {Component, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private movieService = inject(DragonTreasureService);

  dragonTreasures: DragonTreasure[] = [];

  ngOnInit(): void {
    this.loadDragonTreasure();
  }

  loadDragonTreasure() {
    this.movieService.getDragonTreasures().subscribe({
      next: (response: any) => {
        if (response.hasOwnProperty('hydra:member')) {
          this.dragonTreasures = response['hydra:member'] as DragonTreasure[];
        } else if (Array.isArray(response)) {
          this.dragonTreasures = response as DragonTreasure[];
        } else {
          window.location.href = '/error'
        }
      },
      error: (error) => {
        console.log('Error: ' + error);
      }
    });
  }
}
