import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { CategoryCouponComponent } from './components/category-coupon/category-coupon.component';
import { BrandCardComponent } from './components/brand-card/brand-card.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { CouponCardComponent } from './components/coupon-card/coupon-card.component';
import { CouponsGridComponent } from './components/coupons-grid/coupons-grid.component';
import { CouponsFilterComponent } from './components/coupons-filter/coupons-filter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoryCouponComponent,
    FooterComponent,
    BrandCardComponent,
    BrandsListComponent,
    CouponCardComponent,
    CouponsGridComponent,
    CouponsFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CategoryCouponComponent,
    HeaderComponent,
    FooterComponent,
    BrandCardComponent,
    CouponCardComponent,
    BrandsListComponent,
    CouponsFilterComponent,
    CouponsGridComponent
  ]
})
export class SharedModule { }
