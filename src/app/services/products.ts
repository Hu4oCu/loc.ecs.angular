import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class ProductsService {
  path: string = null;
  constructor(private apiService: ApiService) {}

  getTenProducts() {
    this.path = "/products";
    return this.apiService.get(this.path);
  }

}
