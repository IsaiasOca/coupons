import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryCouponService {

  private apiUrl = 'https://api.viveplus.com.mx/v1/?key=t3stfr0ntAng2023$.&m=lista_categorias'

  constructor(
    private http: HttpClient
  ) { }

  getCouponCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
