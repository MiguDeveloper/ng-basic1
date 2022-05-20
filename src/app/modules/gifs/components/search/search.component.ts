import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GifService } from '@module/gifs/services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  @Output() terminoBuscar: EventEmitter<string> = new EventEmitter();

  constructor(private gifService: GifService) {}

  ngOnInit(): void {}

  buscar() {
    const termino = this.txtBuscar.nativeElement.value;
    if (!termino) {
      return;
    }

    this.terminoBuscar.emit(termino);
    this.txtBuscar.nativeElement.value = '';
  }
}
