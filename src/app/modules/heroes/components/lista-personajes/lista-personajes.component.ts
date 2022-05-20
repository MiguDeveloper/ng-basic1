import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '@core/model/personaje';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss'],
})
export class ListaPersonajesComponent implements OnInit {
  @Input() heroes: Personaje[] = [];

  constructor() {}

  ngOnInit(): void {}
}
