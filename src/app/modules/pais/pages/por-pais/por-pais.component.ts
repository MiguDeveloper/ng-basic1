import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  termino: string = 'Hola Mundo';
  constructor() {}

  ngOnInit(): void {}

  buscar() {
    if (!this.termino.trim()) {
      return;
    }
    console.log(this.termino);
  }
}
