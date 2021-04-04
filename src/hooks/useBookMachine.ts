import { useMachine } from '@xstate/react';
import bookMachine from 'state-machines/book-machine';
import { Book } from 'interfaces/Book';

const useBookMachine = () => {
  const [state, send] = useMachine(bookMachine);

  const { wishlist, bookTypeToSearch, books } = state.context;

  const addBook = (book: Book) => {
    send({ type: 'ADD_BOOK', book });
  };

  const searchBooks = (bookType: string) => {
    send({ type: 'SEARCH.CHANGE', bookType });
  };
  return {
    wishlist,
    bookTypeToSearch,
    books,
    addBook,
    searchBooks,
  };
};

export { useBookMachine };
