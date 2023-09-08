import { Component, OnInit } from '@angular/core';
import { CategoryCouponService } from '../../services/category-coupon.service';
import { Categories } from 'src/app/models/categories.model';



@Component({
  selector: 'app-category-coupon',
  templateUrl: './category-coupon.component.html',
  styleUrls: ['./category-coupon.component.scss'],
})
export class CategoryCouponComponent implements OnInit{

  categoriesList: Categories[] = [];

  constructor(private categoryCouponService: CategoryCouponService){
  }

  ngOnInit(): void {
      this.getAllCategories();
  }

  getAllCategories(){
    this.categoryCouponService.getCouponCategories()
    .subscribe(data => {
      this.categoriesList = data.Categorias;
      console.log(this.categoriesList);
    });
  }

}
