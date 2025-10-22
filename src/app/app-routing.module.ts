import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCard } from './authors/author-card/author-card.component';
import { Authors } from './authors/authors/authors.component';

const routes: Routes = [
  { path: 'authorDetails', component: AuthorCard },
  { path: 'authors', component: Authors }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
