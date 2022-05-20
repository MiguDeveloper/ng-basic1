import { Component, OnInit } from '@angular/core';
import { Personaje } from '@core/model/personaje';
import { HeroesService } from '@module/heroes/services/heroes.service';

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss'],
})
export class DragonballPageComponent implements OnInit {
  heroes: Personaje[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.heroes$.subscribe((data) => (this.heroes = data));
  }

  addHeroe(event: Personaje) {
    this.heroesService.addHeroe(event);
  }
}
