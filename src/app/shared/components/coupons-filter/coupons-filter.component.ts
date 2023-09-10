import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons-filter',
  templateUrl: './coupons-filter.component.html',
  styleUrls: ['./coupons-filter.component.scss']
})
export class CouponsFilterComponent {

  gridLayout: boolean = false;

  orderSelected: string = '';

  changeLayout(){
    console.log("grid layout", this.gridLayout)
    this.gridLayout = !this.gridLayout;
  }

}
