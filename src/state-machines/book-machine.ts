import { createMachine, assign } from 'xstate';
import { Book } from 'interfaces/Book';
import { getBooksByType } from 'components/book-search/book-search.service';

const bookMachine = createMachine<any, any, any>({
  id: 'bookMachine',
  context: {
    wishlist: [],
    lastCalled: null,
    bookTypeToSearch: '',
    books: [],
    lastTypeSearched: '',
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        ADD_BOOK: {
          actions: assign({
            wishlist: (context, event) => {
              if (
                context.wishlist.find((book: Book) => book.id === event.book.id)
              ) {
                return context.wishlist;
              }
              return [...context.wishlist, event.book];
            },
          }),
        },
      },
    },
    searching: {
      invoke: {
        src: (context, event) => {
          return getBooksByType(context.bookTypeToSearch);
        },
        onDone: {
          target: 'idle',
          actions: assign({
            books: (_, event) => event.data,
          }),
        },
      },
    },
  },
  on: {
    'SEARCH.CHANGE': [
      {
        cond: (context, event) => {
          return event.bookType === '';
        },
        actions: assign({
          bookTypeToSearch: (_, event) => event.bookType,
          books: [],
          lastTypeSearched: '',
        }),
      },
      {
        target: 'searching',
        cond: (context, event) => {
          const { lastCalled } = context;

          if (!lastCalled) return true;

          if (context.lastTypeSearched === event.bookType) return false;

          const currentTime = new Date();

          const diff = currentTime.getTime() - lastCalled.getTime();

          return diff > 500;
        },
        actions: assign({
          bookTypeToSearch: (_, event) => event.bookType,
          lastCalled: (_, event) => new Date(),
          lastTypeSearched: (context, event) => event.bookType,
        }),
      },
      {
        actions: assign({
          bookTypeToSearch: (_, event) => event.bookType,
        }),
      },
    ],
  },
});

export default bookMachine;
