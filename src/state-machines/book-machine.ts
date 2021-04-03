import { createMachine, assign } from 'xstate';

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
          return [...context.wishlist, event.book];
        },
      }),
    },
  },
});

export default bookMachine;
