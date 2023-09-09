import { Component, Input } from '@angular/core';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent {

  @Input() listaMarcas: Brands = {
    id_marca: 0,
    nombre_marca: '',
    logo_marca: '',
    imagen_marca: '',
    promo_marca: '',
    promo_desc_marca: ''
  };

}
