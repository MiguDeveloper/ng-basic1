import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private _historial: string[] = [];
  private resultBusqueda = new BehaviorSubject<any>({});
  public resultBusqueda$ = this.resultBusqueda.asObservable();

  constructor(private httpClient: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    const resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    if (resultados.length) {
      this.resultBusqueda.next({ data: resultados });
    }
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs$(termino: string): Observable<any> {
    termino = termino.trim().toLowerCase();
    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    let params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('q', termino)
      .set('limit', '10');

    const httpOptions = {
      params,
    };
    console.log(this._historial);
    return this.httpClient
      .get(environment.giphyAPI, httpOptions)
      .pipe(tap((resp: any) => this.resultBusqueda.next(resp)));
  }
}
