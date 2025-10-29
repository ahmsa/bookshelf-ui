import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Genre } from "../../data/genre";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private readonly URL: string = `${environment.baseUrl}/genres`;

  private readonly http: HttpClient = inject(HttpClient);

  private allGenresCache: Map<number | null, Genre> = new Map<number | null, Genre>();

  public getAllGenres(): Observable<Genre[]> {
    if(this.allGenresCache.size > 0) {
      return of(Array.from(this.allGenresCache.values()));
    }
    return this.http.get<Genre[]>(this.URL).pipe(
      tap((genres) => {
        genres.forEach((genre) => {
          this.allGenresCache.set(genre.id, genre);
        })
      })
    );
  }

  public saveGenre(genre: Genre) : Observable<Genre> {
    return this.http.post<Genre>(`${this.URL}/save`, genre).pipe(
      tap((savedGenre) => {
        this.allGenresCache.set(savedGenre.id, savedGenre);
      })
    );
  }

  public deleteGenre(id: number): Observable<null> {
    let param: HttpParams = new HttpParams().set("id", id);
    return this.http.delete<null>(`${this.URL}`, { params: param }).pipe(
      tap(() => {
        this.allGenresCache.delete(id);
      })
    );
  }

  public getGenreById(id: number): Observable<Genre> {
    const cachedGenre = this.allGenresCache.get(+id);
    if (cachedGenre) {
      return of(cachedGenre);
    }

    return this.http.get<Genre>(`${this.URL}/${id}`).pipe(
      tap((genre) => {
        this.allGenresCache.set(genre.id, genre);
      })
    );
  }
}
