import { Author } from "./author";

export class Book {
    id: number | null = null;
    title: string = '';
    authors : Author[] = [];
}
