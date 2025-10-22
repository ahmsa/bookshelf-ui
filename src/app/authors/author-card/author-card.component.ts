import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Author } from 'src/data/author';
import { AuthorService } from '../author-service';

@Component({
  selector: 'app-author-card',
  imports: [FormsModule],
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCard {
  author : Author = new Author();

  public constructor(private authorService: AuthorService) {}

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
  }
}
