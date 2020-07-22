import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  getBooks(): any[] {
    let bookName = ['book1','book2'];
    return bookName;
  }
}
