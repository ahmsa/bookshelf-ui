import { Component, inject, Input, output, Output } from '@angular/core';
import { Book } from "../../../data/book";
import { FormsModule } from "@angular/forms";
import { BooksService } from "../books-service";

@Component({
  selector: 'app-book-details',
  imports: [
    FormsModule
  ],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {
    @Input({ required: true }) book: Book = new Book();

    close = output<boolean>();

    private readonly booksService: BooksService = inject(BooksService);

  protected onSubmit(book: Book) {
    this.booksService.saveBook(book).subscribe(() => {

      this.close.emit(true);
    });
  }

  protected onCancel() {
    this.close.emit(false);
  }
}
