import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;
  selectedbook: any;
  showDetails = false;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { 
    this.products = this.productsService.getProducts();
  }

  ngOnInit(): void {
  }

  details(value) {
    console.log('selected book', value);
    this.router.navigate(['/book-details'], { queryParams: { id: value.id, } });

  }

  more(data) {
    this.showDetails = true;
    this.selectedbook = data;
  }

}
