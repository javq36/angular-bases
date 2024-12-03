import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'Iron-Man', 'Spider-Man'];
  public deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
