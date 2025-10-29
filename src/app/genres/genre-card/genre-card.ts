import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Genre } from 'src/data/genre';
import { GenreService } from '../genre-service';

@Component({
  selector: 'app-genre-card',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './genre-card.html',
  styleUrls: ['./genre-card.css']
})
export class GenreCard {
  private location: Location = inject(Location);
  private genreService: GenreService = inject(GenreService);
  genre : Genre = new Genre();

  
  onCancel() {
    this.location.back();
  }

  onSubmit(genre: Genre) {
    this.genreService.saveGenre(genre).subscribe({
      next: (response) => {
        // Navigate back after save completes so the genres list can show the new genre
        this.location.back();
      },
      error: (error) => {
        console.error('Error saving genre:', error);
      }
    });
  }

}
