import { Injectable } from '@angular/core';
import { Personaje } from '@core/model/personaje';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _heroes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 },
    { nombre: 'Crilim', poder: 800 },
  ];

  private _heroesBS: BehaviorSubject<Personaje[]> = new BehaviorSubject(
    this._heroes
  );
  public heroes$ = this._heroesBS.asObservable();

  constructor() {}

  addHeroe(heroe: Personaje) {
    this._heroes.push(heroe);
    this._heroesBS.next([...this._heroes]);
  }
}
