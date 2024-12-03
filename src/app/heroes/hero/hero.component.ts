import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  constructor() { }

  getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeName(newName: string): void {
    this.name = newName;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetHero(): void {
    this.name = 'Iron Man'
    this.age = 45;
  }
}
