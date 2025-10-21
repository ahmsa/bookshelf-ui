import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Genre } from "../../data/genre";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private readonly URL: string = `${environment.baseUrl}/genres`;

  public constructor(private readonly http: HttpClient) { }

  public getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.URL);
  }

  public saveGenre(genre: Genre) : Observable<Genre> {
    return this.http.put<Genre>(`${this.URL}/save`, genre);
  }

  public deleteGenre(id: string){
    let param: HttpParams = new HttpParams().set("id", id);
    this.http.delete<Genre>(`${this.URL}/delete`, { params: param });
  }
}
