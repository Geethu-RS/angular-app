import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  books: any;
  selectedbook: any;
  showDetails = false;
  constructor(
    private bookService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.books = this.bookService.getBookList();
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
