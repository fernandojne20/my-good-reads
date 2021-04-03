import { useMachine } from '@xstate/react';
import bookMachine from 'state-machines/book-machine';
import { Book } from 'interfaces/Book';

const useBookMachine = () => {
  const [state, send] = useMachine(bookMachine);

  const addBook = (book: Book) => {
    send({ type: 'ADD_BOOK', book });
  };
  return {
    wishlist: state.context.wishlist,
    addBook,
  };
};

export { useBookMachine };
