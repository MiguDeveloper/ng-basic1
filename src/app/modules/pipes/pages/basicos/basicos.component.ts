import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'miguel';
  nombreUpper: string = 'MIGUEL';
  nombreCompleto: string = 'miGuEl cHinchay';
  fechaHoy: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
