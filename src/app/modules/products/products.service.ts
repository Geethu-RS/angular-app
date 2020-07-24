import { Injectable } from '@angular/core';
import { Product } from '../../core/mocks/product-list';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { 

  }

  getProducts() {
    return Product;
  }
}
