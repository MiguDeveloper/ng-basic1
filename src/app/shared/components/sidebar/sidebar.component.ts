import { Component, OnInit } from '@angular/core';
import { GifService } from '@module/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifService: GifService) {}

  ngOnInit(): void {}

  get historial(): string[] {
    return this.gifService.historial;
  }

  buscar(termino: string): void {
    this.gifService
      .buscarGifs$(termino)
      .subscribe((resp) =>
        localStorage.setItem('resultados', JSON.stringify(resp.data))
      );
  }
}
