import { IBook } from '../../models/book';


export const existsBook = (shelveBooks: IBook[], addBook: IBook): boolean => {
  for (const book of shelveBooks) {
    if (book.title === addBook.title.trim() &&
      book.authorName === addBook.authorName ||
      book.title === addBook.title.trim()) {

      return true;
    }

  }

  return false;
};
