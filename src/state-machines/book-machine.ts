import { createMachine, assign } from 'xstate';
import { Book } from 'interfaces/Book';

const bookMachine = createMachine<any, any, any>({
  id: 'bookMachine',
  context: {
    wishlist: [],
  },
  initial: 'idle',
  states: {
    idle: {},
  },
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
});

export default bookMachine;
