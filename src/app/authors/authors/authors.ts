import { Component, inject } from '@angular/core';
import { AuthorService } from '../author-service';
import { AsyncPipe } from '@angular/common';
import { TableModule } from "primeng/table";
import { Observable } from "rxjs";
import { Author } from "../../../data/author";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authors',
  imports: [
    AsyncPipe,
    TableModule,
    RouterLink
  ],
  templateUrl: './authors.html',
  styleUrls: ['./authors.css']
})
export class Authors {
  private authorsService: AuthorService = inject(AuthorService);
  public authors$: Observable<Author[]> = this.authorsService.getAllAuthors();


delete(id: number) {
  this.authorsService.deleteAuthor(id).subscribe(() => {
    this.authors$ = this.authorsService.getAllAuthors();
  });
}

}
