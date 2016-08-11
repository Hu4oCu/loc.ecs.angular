import { Component } from '@angular/core';
import { CartsService } from '../services';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Cart` component loaded asynchronously');

@Component({
  selector: 'cart',
  styleUrls: ['cart.style.css'],
  templateUrl: 'cart.template.html'
})
export class Cart {
  carts;

  constructor(private cartsService: CartsService) {
    this.cartsService.getCart()
      .subscribe(res => this.carts = res);
  }

  ngOnInit() {
    console.log('hello `Cart` component');
  }

}
