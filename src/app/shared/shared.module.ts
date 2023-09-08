import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { CategoryCouponComponent } from './components/category-coupon/category-coupon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoryCouponComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CategoryCouponComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
