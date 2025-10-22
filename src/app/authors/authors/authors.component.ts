import { Component } from '@angular/core';
import { AuthorService } from '../author-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-authors',
  imports: [AsyncPipe],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class Authors {
  public authors$ = this.authorsService.getAllAuthors();

  public constructor(private authorsService: AuthorService) { }

}
