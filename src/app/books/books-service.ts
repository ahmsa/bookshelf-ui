import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Book } from "../../data/book";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly URL = `${environment.baseUrl}/books`;
  private readonly httpClient: HttpClient = inject(HttpClient);

  public getAllBooks() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.baseUrl}/books`);
  }

  public saveBook(book: Book) : Observable<Book> {
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<Book>(`${this.URL}/save`, book, { headers });
  }

  public deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL + `?id=${id}`);
  }

  public getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.URL + `?id=${id}`);
  }
}
