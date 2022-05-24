import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.scss'],
})
export class PaisFormComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer$: Subject<string> = new Subject();
  termino: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer$
      .pipe(debounceTime(300))
      .subscribe((resp) => this.onDebounce.emit(resp));
  }

  buscar(): void {
    if (!this.termino.trim()) {
      return;
    }

    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer$.next(this.termino);
  }
}
