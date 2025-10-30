import { Component, inject, Input, output } from '@angular/core';
import { Book } from "../../../data/book";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { PrimeTemplate } from "primeng/api";
import { RouterLink } from "@angular/router";
import { TableModule } from "primeng/table";
import { BooksService } from "../books-service";

@Component({
  selector: 'app-books-table',
  imports: [
    AsyncPipe,
    PrimeTemplate,
    RouterLink,
    TableModule
  ],
  templateUrl: './books-table.html',
  styleUrl: './books-table.css'
})
export class BooksTable {
  @Input({ required: true }) books$: Observable<Book[]> | undefined;

  bookDetails = output<Book>();

  private readonly booksService: BooksService = inject(BooksService);

  protected delete(id: number) {
    this.booksService.deleteBook(id).subscribe((result) => {
      this.refreshBooks();
    })
  }

  private refreshBooks() {
    this.books$ = this.booksService.getAllBooks();
  }

  protected onBookDetails(book: Book | null): void {
    this.bookDetails.emit(book || new Book());
  }
}
