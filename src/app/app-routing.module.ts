import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCard } from './authors/author-card/author-card.component';

const routes: Routes = [
  { path: 'authorDetails', component: AuthorCard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
