import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '@core/model/pais';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.scss'],
})
export class PaisTableComponent implements OnInit {
  @Input() paises: Pais[] = [];

  constructor() {}

  ngOnInit(): void {}
}
