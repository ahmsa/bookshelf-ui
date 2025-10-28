import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-genre-card',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './genre-card.html',
  styleUrls: ['./genre-card.css']
})
export class GenreCard {

}
