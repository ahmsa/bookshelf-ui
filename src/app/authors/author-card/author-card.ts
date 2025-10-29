import { Component, inject,  Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Author } from 'src/data/author';
import { AuthorService } from '../author-service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-card',
  imports: [
    FormsModule
  ],
  templateUrl: './author-card.html',
  styleUrls: ['./author-card.css'],
  standalone: true
})
export class AuthorCard implements OnInit {
  @Input() id?: string;
  author : Author = new Author();

  private activatedRoute = inject(ActivatedRoute);
  private location: Location = inject(Location);
  private authorService: AuthorService = inject(AuthorService);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (this.id) {
        this.authorService.getAuthorById(+this.id).subscribe(author => {
          if (author) {
            this.author = author;
          }
        });
      }
    });
  }

  onSubmit(formData: Author) {
    this.authorService.saveAuthor(formData).subscribe({
      next: (response) => {
        // Navigate back after save completes so the authors list can show the new author
        this.location.back();
      },
      error: (error) => {
        console.error('Error saving author:', error);
      }
    });
  }

  onCancel() {
    this.location.back();
  }
}
