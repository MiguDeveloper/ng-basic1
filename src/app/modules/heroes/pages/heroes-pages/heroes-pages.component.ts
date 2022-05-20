import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-pages',
  templateUrl: './heroes-pages.component.html',
  styleUrls: ['./heroes-pages.component.scss'],
})
export class HeroesPagesComponent implements OnInit {
  heroes: string[] = ['Ironman', 'Spiderman', 'Batman', 'Hulk'];
  heroeDelete: string = '';

  constructor() {}

  ngOnInit(): void {}

  eliminarHeroe(): void {
    this.heroeDelete = this.heroes.shift() || '';
  }
}
