import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '@core/model/personaje';

@Component({
  selector: 'app-form-personaje',
  templateUrl: './form-personaje.component.html',
  styleUrls: ['./form-personaje.component.scss'],
})
export class FormPersonajeComponent implements OnInit {
  @Output() personaje: EventEmitter<Personaje> = new EventEmitter();
  heroe: Personaje = { nombre: '', poder: 0 };

  constructor() {}

  ngOnInit(): void {}

  addHeroe() {
    if (this.heroe.nombre.trim().length === 0) {
      return;
    }
    this.personaje.emit(this.heroe);
    this.heroe = { nombre: '', poder: 0 };
  }
}
