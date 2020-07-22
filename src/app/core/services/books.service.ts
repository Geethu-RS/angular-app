import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
    { id: 1, name: 'Web Designing', type: 'computers', price: 20, desc: "Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity. Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure." },
    { id: 2, name: 'Heroes Proved 2', type: 'computers', price: 50, desc: "Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity. Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure." },
    { id: 3, name: 'Life Style 2', type: 'computers', price: 80, desc: "Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity. Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure." },
    { id: 4, name: 'Business Ethics', type: 'business', price: 40, desc: "Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity. Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure." },
    { id: 5, name: 'Retro Design', type: 'business', price: 90, desc: "Over the years, I will come, who will nostrud aliquip out of her the advantage of exercise, so that stimulus efforts if the school district and longevity. Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure." }
  ];
  constructor() { }
  
  getBookList() {
    return this.books;
  }
}
