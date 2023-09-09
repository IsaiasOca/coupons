import { Component, OnInit } from '@angular/core';
import { ListaMarcasService } from '../../services/lista-marcas.service';
import { Brands } from 'src/app/models/brands.model';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {

  listaMarcas: Brands[] = [];
  limit: number = 4;
  offset: number = 0;

  constructor(
    private listaMarcasService: ListaMarcasService
  ){}

  ngOnInit(): void {
      this.getBrandslist();
  }

  getBrandslist(){
    this.listaMarcasService.getBrandsList(this.limit, this.offset)
    .subscribe(data => {
      this.listaMarcas = this.listaMarcas.concat(data.Marcas);
      this.offset += this.limit;
    })
  }

}
