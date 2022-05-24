import { Pais } from '@core/model/pais';
import { PaisService } from '@module/pais/services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.paisByAlpha$(id)))
      .subscribe(
        (resp) => {
          this.pais = resp;
        },
        (err) => {}
      );
  }
}
