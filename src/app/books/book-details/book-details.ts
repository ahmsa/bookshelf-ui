import { GenreService } from './../../genres/genre-service';
import { Component, inject, Input, output, Output } from '@angular/core';
import { Book } from "../../../data/book";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BooksService } from "../books-service";
import { AuthorService } from 'src/app/authors/author-service';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-book-details',
  imports: [
    FormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {
    @Input({ required: true }) book: Book = new Book();

    authorService: AuthorService = inject(AuthorService);
    genreService: GenreService = inject(GenreService);

    close = output<boolean>();

    private readonly booksService: BooksService = inject(BooksService);

    allAuthors$ = this.authorService.getAllAuthors();
    allGenres$ = this.genreService.getAllGenres();

  protected onSubmit(book: Book) {
    this.booksService.saveBook(book).subscribe(() => {

      this.close.emit(true);
    });
  }

  protected onCancel() {
    this.close.emit(false);
  }
}
