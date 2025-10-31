import { inject, Injectable } from '@angular/core';
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

  private readonly http: HttpClient = inject(HttpClient);

  public getAllAuthors() : Observable<Author[]> {
    if(this.authorMap.size > 0) {
      return of(Array.from(this.authorMap.values()));
    }

    return this.populateCache();
  }

  public saveAuthor(author: Author) : Observable<Author> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Author>(`${this.URL}/save`, author, { headers }).pipe(
      tap((savedAuthor) => {
        this.populateCache();
      })
    );
  }

  public deleteAuthor(id: number): Observable<void> {
    let param: HttpParams = new HttpParams();
    param.set('id', id);
    return this.http.delete<void>(this.URL + `?id=${id}`, { params: param }).pipe(
      tap(() => {
        this.populateCache();
      })
    );
  }

  getAuthorById(id: number): Observable<Author | null> {
    if(this.authorMap.size === 0) {
      return this.populateCache().pipe(
        map(() => this.getAuthorFromCache(id))
      );
    }

    return of(this.getAuthorFromCache(id));
  }

  private getAuthorFromCache(id: number): Author {
    let author = this.authorMap.get(id);

    if(!author) {
      throw new Error('Author not found in cache');
    }

    return author;
  }

  private populateCache(): Observable<Author[]> {
    this.authorMap = new Map<number | null, Author>();
    return this.http.get<Author[]>(this.URL).pipe(
      tap((authors) => {
        for(let author of authors){
          this.authorMap.set(author.id, author);
        }
      })
    );
  }
}
