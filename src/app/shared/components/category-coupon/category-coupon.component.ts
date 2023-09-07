import { Component, OnInit } from '@angular/core';
import { CategoryCouponService } from '../../services/category-coupon.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-coupon',
  templateUrl: './category-coupon.component.html',
  styleUrls: ['./category-coupon.component.scss'],
})
export class CategoryCouponComponent implements OnInit{

  categoriesList: Category[] = []

  constructor(private categoryCouponService: CategoryCouponService){
  }

  ngOnInit(): void {
      this.getAllCategories();
  }

  getAllCategories(){
    this.categoryCouponService.getCouponCategories()
    .subscribe(data => {
      this.categoriesList = data;
      console.log(this.categoriesList);
    });
  }

}
