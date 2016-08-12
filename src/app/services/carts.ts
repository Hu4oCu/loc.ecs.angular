import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class CartsService {
  path: string = null;
  body: string = null;
  constructor(private apiService: ApiService) {}

  getCart() {
    this.path = "/carts";
    return this.apiService.get(this.path);
  }

  getCount() {
    this.path = "/carts/count";
    return this.apiService.get(this.path);
  }

  addToCart(pid) {
    this.path = "/carts/add";
    this.body = JSON.stringify({user_id: 1, product_id: pid, quantity: 1});
    return this.apiService.post(this.path, this.body);
  }

}
