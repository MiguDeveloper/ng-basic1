import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '@core/model/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private httpClient: HttpClient) {}

  buscarPais$(termino: string): Observable<Pais[]> {
    const urlPais: string = `${environment.apiRestCountries}/name/${termino}`;
    return this.httpClient.get<Pais[]>(urlPais);
  }
}
