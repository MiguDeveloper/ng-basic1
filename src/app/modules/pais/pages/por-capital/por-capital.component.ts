import { Pais } from '@core/model/pais';
import { PaisService } from '@module/pais/services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hasError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.termino = termino;
    this.hasError = false;
    this.paisService.buscarPorCapital$(this.termino).subscribe(
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
}
