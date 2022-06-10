import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 83783788.6363;
  porcentaje: number = 0.4856;
  constructor() {}

  ngOnInit(): void {}
}
