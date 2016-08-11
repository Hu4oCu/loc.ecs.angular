import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class CartsService {
  path: string = null;
  constructor(private apiService: ApiService) {}

  getCart() {
    this.path = "carts"
    return this.apiService.get(this.path);
  }

  getCount() {
    this.path = "carts/count";
    return this.apiService.get(this.path);
  }

  addToCart(pid) {
    this.path = "carts/add?pid=" + pid;
    return this.apiService.post(this.path);
  }

}
