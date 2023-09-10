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

  getBrandsList(limit: number, offset: number, mix?: boolean, order?: string) {
    let params = new HttpParams()
        .set('limit', limit)
        .set('offset', offset)
    if(mix){
      params = params.set('mix', mix)
    }
    if(order){
      params = params.set('orden', order)
    }

    return this.http.get<Brand>(`${environment.principalURL}?m=lista_marcas`, { params });
  }
}
