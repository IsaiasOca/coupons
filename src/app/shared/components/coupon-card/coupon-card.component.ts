import { Component, Input } from '@angular/core';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss']
})
export class CouponCardComponent {

  @Input() listaMarcas: Brands = {
    id_marca: 0,
    nombre_marca: '',
    logo_marca: '',
    imagen_marca: '',
    promo_marca: '',
    promo_desc_marca: ''
  };
  
}
