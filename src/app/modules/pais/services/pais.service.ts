import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '@core/model/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private httpClient: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  buscarPais$(termino: string): Observable<Pais[]> {
    const urlPais: string = `${environment.apiRestCountries}/name/${termino}`;
    return this.httpClient.get<Pais[]>(urlPais, { params: this.httpParams });
  }

  buscarPorCapital$(termino: string): Observable<Pais[]> {
    const apiCapital: string = `${environment.apiRestCountries}/capital/${termino}`;
    return this.httpClient.get<Pais[]>(apiCapital, { params: this.httpParams });
  }

  paisByAlpha$(id: string): Observable<Pais> {
    const apiByAlpha: string = `${environment.apiRestCountries}/alpha/${id}`;
    return this.httpClient.get<Pais>(apiByAlpha);
  }

  buscarRegion$(region: string): Observable<Pais[]> {
    const apiPaisesByRegion: string = `${environment.apiRestCountries}/regionalbloc/${region}`;
    return this.httpClient.get<Pais[]>(apiPaisesByRegion, {
      params: this.httpParams,
    });
  }
}
