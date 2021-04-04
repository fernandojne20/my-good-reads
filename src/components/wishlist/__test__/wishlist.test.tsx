import React from 'react';
import { render } from '@testing-library/react';

import Wishlist from '../index';
import { Book } from 'interfaces/Book';
import { WISHLIST } from './sampleWishlist';

describe('Wishlist Component', () => {
  test('Show successfully the Wishlist books', () => {
    const WishlistMock: Book[] = WISHLIST;

    const { getByText, getAllByRole, getAllByText } = render(
      <Wishlist books={WishlistMock} />
    );

    const title = getByText(`My Reading Wishlist (${WishlistMock.length})`);

    const books = getAllByRole('listitems');

    expect(title).toBeInTheDocument();
    expect(books).toHaveLength(WishlistMock.length);

    WishlistMock.forEach((book) => {
      expect(getByText(book.title)).toBeInTheDocument();
      if (book.authors.length > 0) {
        expect(
          getAllByText(`By ${book.authors.join(',')}`)[0]
        ).toBeInTheDocument();
      }
    });
  });

  test('Show empty list when wishlist is empty', () => {
    const WishlistMock: Book[] = [];

    const { getByText } = render(<Wishlist books={WishlistMock} />);

    const title = getByText(`My Reading Wishlist (${WishlistMock.length})`);

    const emptyMesage = getByText(/No books added/i);

    expect(title).toBeInTheDocument();
    expect(emptyMesage).toBeInTheDocument();
  });
});
