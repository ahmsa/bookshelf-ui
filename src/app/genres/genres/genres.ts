import { Component, inject } from '@angular/core';
import { GenreService } from "../genre-service";
import { RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { TableModule } from "primeng/table";
import { Observable } from "rxjs";
import { Genre } from "../../../data/genre";

@Component({
  selector: 'app-genres',
  imports: [
    RouterLink,
    AsyncPipe,
    TableModule
  ],
  templateUrl: './genres.html',
  styleUrls: ['./genres.css']
})
export class Genres {
  private readonly genreService: GenreService = inject(GenreService);

  protected genres$: Observable<Genre[]> = this.genreService.getAllGenres();

  protected delete(id: number) {
    this.genreService.deleteGenre(id).subscribe(
      () => this.genres$ = this.genreService.getAllGenres()
    );
  }
}
