import { Component } from '@angular/core';

import { Title } from './title';
import { XLarge } from './x-large';
import { ProductsService, CartsService } from '../services';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  products;
  cart_res;
  carts;

  // TypeScript public modifiers
  constructor(public title: Title, private productsService: ProductsService, private cartsService: CartsService) {
    this.productsService.getTenProducts()
      .subscribe(res => this.products = res);
  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.cartsService.getCart()
      .subscribe(res => {
        this.carts = res;
        for (var cart of this.carts) {
          document.getElementById(cart.product.product_id).innerHTML="В корзине";
        }
      })
  }

  addToCart(uid, pid) {
    if (document.getElementById(pid).innerHTML == "Купить") {
      this.cartsService.addToCart(uid, pid)
        .subscribe(res => {
          this.cart_res = res;
          document.getElementById(pid).innerHTML = "В корзине";
          document.getElementById("cart_count").innerHTML = "Товаров: " + this.cart_res.cart_size;
        });
    }
    else {
      document.location.pathname="/cart";
    }
  }

}
