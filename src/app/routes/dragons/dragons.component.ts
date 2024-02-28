import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dragons',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dragons.component.html',
  styleUrl: './dragons.component.css'
})
export class DragonsComponent {
  title: string = 'Dragon treasures';

}
