import { GifService } from '@module/gifs/services/gif.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() resultados: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
