import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Author } from "../../data/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly URL = `${environment.baseUrl}/authors`;
  public constructor(private http: HttpClient) {}

  public getAllAuthors() : Observable<Author[]> {
    return this.http.get<Author[]>(this.URL);
  }

  public saveAuthor(author: Author) : Observable<Author> {
    return this.http.post<Author>(`${this.URL}/save`, author);
  }

  public deleteAuthor(id: string): void {
    let param: HttpParams = new HttpParams();
    param.set('id', id);
    this.http.delete(this.URL, { params: param })
  }
}
