import { Component, inject, Inject, OnInit } from '@angular/core';
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
  author : Author = new Author();

  private activatedRoute = inject(ActivatedRoute);
  private location: Location = inject(Location);
  private authorService: AuthorService = inject(AuthorService);

  ngOnInit() {
    console.log('AuthorCard initialized');
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id) {
        this.authorService.getAuthorById(+id).subscribe(author => {
          if (author) {
            this.author = author;
          }
        });
      }
    });
  }

  onSubmit(formData: Author) {
    console.log('Form submitted:', formData);
    this.authorService.saveAuthor(formData).subscribe({
      next: (response) => {
        console.log('Author saved successfully:', response);
      },
      error: (error) => {
        console.error('Error saving author:', error);
      }
    });
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
