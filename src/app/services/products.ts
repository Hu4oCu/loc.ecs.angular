import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class ProductsService {
  path: string = '/products';
  constructor(private apiService: ApiService) {}

  getTenProducts() {
    return this.apiService.get(this.path);
  }

}
