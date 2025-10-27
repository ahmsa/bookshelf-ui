import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { from, Observable, of } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Author } from "../../data/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorMap: Map<number | null, Author> = new Map<number | null, Author>();

  private readonly URL = `${environment.baseUrl}/authors`;
  public constructor(private http: HttpClient) {}

  public getAllAuthors() : Observable<Author[]> {
    if(this.authorMap.size > 0) {
      return of(Array.from(this.authorMap.values()));
    }

    return this.http.get<Author[]>(this.URL).pipe(
      tap((authors) => {
        authors.forEach((author) => {
          this.authorMap.set(author.id, author);
        });
      })
    );
  }

  public saveAuthor(author: Author) : Observable<Author> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Author>(`${this.URL}/save`, author, { headers }).pipe(
      tap((savedAuthor) => {
        this.authorMap.set(savedAuthor.id, savedAuthor);
      })
    );
  }

  public deleteAuthor(id: number): Observable<void> {
    let param: HttpParams = new HttpParams();
    param.set('id', id);
    return this.http.delete<void>(this.URL + `?id=${id}`, { params: param }).pipe(
      tap(() => {
        this.authorMap.delete(id);
      })
    );
  }

  getAuthorById(id: number): Observable<Author | null> {
    const author = this.authorMap.get(id);
    if (author !== undefined) {
      return of(author);
    }

    return this.getAllAuthors().pipe(
      tap((authors) => {
        const foundAuthor = authors.find(a => a.id === id);
        if (foundAuthor) {
          this.authorMap.set(foundAuthor.id, foundAuthor);
        }
      }),
      // Map to the specific author after fetching all
      // Use map to transform the array to a single Author or null
      // Import 'map' from 'rxjs/operators' if not already imported
      map((authors: Author[]) => {
        const foundAuthor = authors.find(a => a.id === id);
        return foundAuthor || null;
      })
    );
  }
}
