import { Component } from '@angular/core';
import { CartsService } from '../services';

@Component({
  selector: 'header-component',
  styleUrls: ['./header.style.css'],
  templateUrl: './header.template.html'
})

export class Header {
  carts;
  product;

  constructor(private cartsService: CartsService) {
    this.cartsService.getCart()
      .subscribe(res => this.carts = res);
    this.product =  this.cartsService.getCount()
      .subscribe(res => this.product = res);
  }

  getCount() {
    this.product =  this.cartsService.getCount()
      .subscribe(res => this.product = res);
  }

}
