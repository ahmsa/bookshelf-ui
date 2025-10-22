import { Component } from '@angular/core';
import { AuthorService } from '../author-service';
import { AsyncPipe } from '@angular/common';
import { TableModule } from "primeng/table";
import { Observable } from "rxjs";
import { Author } from "../../../data/author";

@Component({
  selector: 'app-authors',
  imports: [
    AsyncPipe,
    TableModule
  ],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  public authors$: Observable<Author[]> = this.authorsService.getAllAuthors();

  public constructor(private authorsService: AuthorService) { }

}
