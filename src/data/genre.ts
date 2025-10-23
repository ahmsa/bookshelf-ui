import { Book } from "./book";

export class Genre {
  id: string | undefined;
  name: string | undefined;
  parentGenre: Genre | undefined;
  subGenres: Genre[] | undefined;
  books: Book[] | undefined;
}
