import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { CategoryCouponComponent } from './components/category-coupon/category-coupon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoryCouponComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CategoryCouponComponent
  ]
})
export class SharedModule { }
