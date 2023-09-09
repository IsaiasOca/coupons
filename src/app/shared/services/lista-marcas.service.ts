import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Brand } from 'src/app/models/brand.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListaMarcasService {

  constructor(
    private http: HttpClient
  ) { }

  getBrandsList(limit: number, offset: number) {
    let params = new HttpParams();
    params = params.set('limit', limit);
    params = params.set('offset', offset);

    return this.http.get<Brand>(`${environment.principalURL}?m=lista_marcas`, { params });
  }
}
