import { GifService } from '@module/gifs/services/gif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-page',
  templateUrl: './gif-page.component.html',
  styleUrls: ['./gif-page.component.scss'],
})
export class GifPageComponent implements OnInit {
  resultsSearch: any[] = [];
  constructor(private gifService: GifService) {
    this.resultsSearch = JSON.parse(localStorage.getItem('resultados')!) || [];
    gifService.resultBusqueda$.subscribe((resp: any) => {
      this.resultsSearch = resp.data;
    });
  }

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.gifService.buscarGifs$(termino.toLowerCase()).subscribe((resp) => {
      const data = JSON.stringify(resp.data);
      localStorage.setItem('resultados', data);
      //this.resultsSearch = resp.data;
    });
  }
}
