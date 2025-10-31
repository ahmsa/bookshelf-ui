import { Component, inject } from '@angular/core';
import { BooksTable } from "../books-table/books-table";
import { BookDetails } from "../book-details/book-details";
import { Observable } from "rxjs";
import { Book } from "../../../data/book";
import { BooksService } from "../books-service";

@Component({
  selector: 'app-books',
  imports: [
    BooksTable,
    BookDetails
  ],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {
  private readonly booksService : BooksService = inject(BooksService);
  singleBook: boolean = false;
  books$ : Observable<Book[]> = this.booksService.getAllBooks();
  protected selectedBook: Book = new Book();

  protected onBookDetails($event: Book) {
    this.singleBook = true;
    this.selectedBook = $event;
  }

  protected onCloseDetails(refresh: boolean) {
    if(refresh) {
      this.books$ = this.booksService.getAllBooks();
    }
    this.singleBook = false;
    this.selectedBook = new Book();
  }
}
