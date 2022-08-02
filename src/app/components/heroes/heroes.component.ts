import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  deleteHero(id: number, hero: Hero) {
    // console.log(id);
    this.heroService
      .deleteHero(hero)
      .subscribe(
        () => (this.heroes = this.heroes.filter((h) => h.id != hero.id))
      );
  }
  addHero(hero: Hero) {
    this.heroService.addHero(hero).subscribe((hero) => this.heroes.push(hero));
  }
}
