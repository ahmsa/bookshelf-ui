import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCardComponent } from './authors/author-card/author-card.component';
import { AuthorsComponent } from './authors/authors/authors.component';

const routes: Routes = [
  { path: 'authorDetails', component: AuthorCardComponent },
  { path: 'authors', component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
