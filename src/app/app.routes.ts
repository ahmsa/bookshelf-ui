// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page";
import { AuthorCard } from "./authors/author-card/author-card";
import { Authors } from "./authors/authors/authors";
import { GenreCard } from "./genres/genre-card/genre-card";
import { Genres } from "./genres/genres/genres";
import { Books } from "./books/books/books";
import { BookDetails } from "./books/book-details/book-details";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authorDetails/:id', component: AuthorCard },
  { path: 'authorDetails', component: AuthorCard },
  { path: 'authors', component: Authors },
  { path: 'genreDetails/:id', component: GenreCard },
  { path: 'authors', component: Authors },
  { path: 'genreDetails', component: GenreCard },
  { path: 'genres', component: Genres },
  { path: 'books', component: Books },
  { path: 'bookDetails/:id', component: BookDetails },
  { path: 'bookDetails', component: BookDetails }
];
