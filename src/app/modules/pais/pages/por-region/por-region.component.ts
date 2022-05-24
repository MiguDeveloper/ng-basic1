import { PaisService } from '@module/pais/services/pais.service';
import { Pais } from '@core/model/pais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion$(region).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        console.log('hubo un error');
        this.paises = [];
      }
    );
  }

  getClassCss(region: string): string {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }
}
