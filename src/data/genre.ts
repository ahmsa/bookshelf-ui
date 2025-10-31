import { Book } from "./book";

export class Genre {
  id: number | null = null;
  name: string | null = null;
  parentGenre: Genre | null = null;
  subGenres: Genre[] | null = null;
  books: Book[] | null = null;
}
