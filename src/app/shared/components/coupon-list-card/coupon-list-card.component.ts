import { Component, Input } from '@angular/core';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-coupon-list-card',
  templateUrl: './coupon-list-card.component.html',
  styleUrls: ['./coupon-list-card.component.scss']
})
export class CouponListCardComponent {
  @Input() listaMarcas: Brands = {
    id_marca: 0,
    nombre_marca: '',
    logo_marca: '',
    imagen_marca: '',
    promo_marca: '',
    promo_desc_marca: ''
  };
}
