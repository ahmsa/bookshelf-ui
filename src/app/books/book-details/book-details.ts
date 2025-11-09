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

    authorIds: number[] = [];
    genreIds: number[] = [];
  
    compareAuthors(author1: any, author2: any) {
      return author1 && author2 && author1.id === author2.id;
    }
  

  protected onSubmit(book: Book) {
    console.log(book);
    this.booksService.saveBook(book).subscribe(() => {

      this.close.emit(true);
    });
  }

  protected onCancel() {
    this.close.emit(false);
  }
}
