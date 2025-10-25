import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCard } from './authors/author-card/author-card';
import { Authors } from './authors/authors/authors';
import { HomePageComponent } from './home-page/home-page';
import { GenreCard } from './genres/genre-card/genre-card';
import { Genres } from './genres/genres/genres';
import { Books } from './books/books/books';
import { BookDetails } from './books/book-details/book-details';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authorDetails/:id', component: AuthorCard },
  { path: 'authors', component: Authors },
  { path: 'genre/:id', component: GenreCard },
  { path: 'genres', component: Genres },
  { path: 'books', component: Books },
  { path: 'bookDetails/:id', component: BookDetails }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
