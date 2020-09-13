export const regulateBookModel = (book) => {
  return {
    title: book.title || '',
    authorName: book.authors || '',
    image: book.image || '',
    isbn: book.isbn13 || '',
  };
};
