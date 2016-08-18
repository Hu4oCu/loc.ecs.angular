import { Component } from '@angular/core';
import { CartsService } from '../services';

@Component({
  selector: 'header-component',
  styleUrls: ['./header.style.css'],
  templateUrl: './header.template.html'
})

export class Header {
  carts;
  productCount;

  constructor(private cartsService: CartsService) {
    this.cartsService.getCart()
      .subscribe(res => this.carts = res);
    this.productCount =  this.cartsService.getCount()
      .subscribe(res => this.productCount = res);
  }

}
