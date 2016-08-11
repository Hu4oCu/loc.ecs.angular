import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class CartsService {
  path: string = "carts";
  constructor(private apiService: ApiService) {}

  getCart() {
    return this.apiService.get(this.path);
  }

  getCount() {
    return this.apiService.get(this.path + "/count");
  }
}
