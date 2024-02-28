import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {DragonTreasureService} from "../../services/dragons/dragon-treasure.service";
import {DragonTreasure} from "../../interfaces/dragons/dragon-treasure";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title: string = "Home of dragons!";
  year: number|undefined;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
