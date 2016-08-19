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
  productCount: string;
  totalPrice: number = 0;

  constructor(private cartsService: CartsService) {
    this.cartsService.getCart()
      .subscribe(res => {
        this.carts = res;
        for (var cart of this.carts) {
          this.totalPrice += cart.product.price;
        }
        document.getElementById("cart-total").innerHTML=this.totalPrice.toString();
      });
  }

  ngOnInit() {
    console.log('hello `Cart` component');
  }

  removefromcart(uid, pid) {
    this.cartsService.removeFromCart(uid, pid)
      .subscribe(res => {
        this.productCount = res.toString();
        document.getElementById(pid).parentElement.parentElement.remove();
        if (this.productCount.includes("0")) {
          document.getElementById("cart_count").innerHTML="Нет товаров";
        }
        else {
          document.getElementById("cart_count").innerHTML = "Товаров: " + this.productCount;
        }
      });
  }

  recalcPrice(quantity, price, total) {
    total.innerHTML=quantity * price;
  }

}
