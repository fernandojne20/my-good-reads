import { createMachine, assign } from 'xstate';
import { Book } from 'interfaces/Book';
import { getBooksByType } from 'components/book-search/book-search.service';

const bookMachine = createMachine<any, any, any>(
  {
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
            actions: 'addBookToWishlist',
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
            actions: 'setBookList',
          },
        },
      },
    },
    on: {
      'SEARCH.CHANGE': [
        {
          cond: 'isBookSearchEmpty',
          actions: 'clearBookSearch',
        },
        {
          target: 'searching',
          cond: 'canStartSearchingABook',
          actions: 'prepareSearching',
        },
        {
          actions: 'setBookTypeToSearch',
        },
      ],
    },
  },
  {
    actions: {
      addBookToWishlist: assign({
        wishlist: (context, event) => {
          if (
            context.wishlist.find((book: Book) => book.id === event.book.id)
          ) {
            return context.wishlist;
          }
          return [...context.wishlist, event.book];
        },
      }),
      setBookList: assign({
        books: (_, event) => event.data,
      }),
      clearBookSearch: assign({
        bookTypeToSearch: (_, event) => event.bookType,
        books: [],
        lastTypeSearched: '',
      }),
      prepareSearching: assign({
        bookTypeToSearch: (_, event) => event.bookType,
        lastCalled: (_, event) => new Date(),
        lastTypeSearched: (context, event) => event.bookType,
      }),
      setBookTypeToSearch: assign({
        bookTypeToSearch: (_, event) => event.bookType,
      }),
    },
    guards: {
      isBookSearchEmpty: (context, event) => {
        return event.bookType === '';
      },
      canStartSearchingABook: (context, event) => {
        const { lastCalled } = context;

        if (!lastCalled) return true;

        if (context.lastTypeSearched === event.bookType) return false;

        const currentTime = new Date();

        const diff = currentTime.getTime() - lastCalled.getTime();

        return diff > 500;
      },
    },
  }
);

export default bookMachine;
