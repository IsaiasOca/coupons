import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ListaMarcasService } from '../../services/lista-marcas.service';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-coupons-grid',
  templateUrl: './coupons-grid.component.html',
  styleUrls: ['./coupons-grid.component.scss']
})
export class CouponsGridComponent implements OnInit, OnChanges {

  @Input() gridLayout: boolean = false;
  @Input() orderSelected: string = '';

  listaMarcas: Brands[] = []
  limit: number = 16;
  offset: number = 0;
  mix: boolean = true;

  constructor(
    private listaMarcasService: ListaMarcasService
  ){}

  ngOnInit(): void {
      this.getBrandslist();
  }
  ngOnChanges(): void{
    if(this.orderSelected != ''){
      this.getBrandslist();
    }
  }

  getBrandslist(){
    if (this.orderSelected == ''){
      this.listaMarcasService.getBrandsList(this.limit, this.offset, this.mix)
      .subscribe(data => {
        this.listaMarcas = this.listaMarcas.concat(data.Marcas);
        this.offset += this.limit;
      })
    } else {
      this.mix = false;
      this.offset = 0;
      this.listaMarcas = []
      this.listaMarcasService.getBrandsList(this.limit, this.offset, this.mix, this.orderSelected)
      .subscribe(data => {
        this.listaMarcas = this.listaMarcas.concat(data.Marcas);
        this.offset += this.limit;
      })
    }
    
  }

  loadMore(){
    this.listaMarcasService.getBrandsList(this.limit, this.offset, this.mix, this.orderSelected)
      .subscribe(data => {
        this.listaMarcas = this.listaMarcas.concat(data.Marcas);
        this.offset += this.limit;
      })
  }
}
