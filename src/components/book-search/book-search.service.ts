import fetchUrl from 'shared/fetchUrl/fetchUrl';
import { Book } from 'interfaces/Book';

export async function getBooksByType(type: string) {
  try {
    const booksVolumes = await fetchUrl(
      `https://www.googleapis.com/books/v1/volumes?q=${type}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    return booksMapper(booksVolumes.items);
  } catch (exception) {
    return [];
  }
}

const booksMapper = (books: any): Book[] => {
  return books.map((book: any) => ({
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    publisher: book.volumeInfo?.publisher,
    publishedDate:
      book.volumeInfo?.publishedDate &&
      new Date(book.volumeInfo?.publishedDate),
    coverUrl: book.volumeInfo?.imageLinks?.thumbnail,
    description: book.volumeInfo?.description,
    isRead: false,
  }));
};
