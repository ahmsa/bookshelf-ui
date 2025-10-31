import { Author } from "./author";
import { Genre } from "./genre";

export class Book {
    id: number | null = null;
    title: string = '';
    authors : Author[] = [];
    publicationYear: number | null = null;
    edition: number | null = null;
    price: number | null = null;
    language: string | null = null;
    publisher: string | null = null;
    isbn: string | null = null;
    genres: Genre[] = [];

}
