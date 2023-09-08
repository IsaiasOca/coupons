import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryCouponService {

  constructor(
    private http: HttpClient
  ) { }

  getCouponCategories() {
    return this.http.get<Category>(`${environment.principalURL}?m=lista_categorias`);
  }
}
