import { Component, OnInit } from '@angular/core';
import { Pais } from '@core/model/pais';
import { PaisService } from '@module/pais/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hasError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.termino = termino;
    this.hasError = false;
    this.paisService.buscarPais$(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
        console.log(resp);
      },
      (err) => {
        this.hasError = true;
        this.paises = [];
      }
    );
    console.log(this.termino);
  }

  sugerencias($event: any) {
    this.hasError = false;
  }
}
