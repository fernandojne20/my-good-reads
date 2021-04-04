import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BookList from '../index';
import { Book } from 'interfaces/Book';
import { WISHLIST } from 'components/wishlist/__test__/sampleWishlist';

describe('BookList Component', () => {
  test('Show successfully the Wishlist books', () => {
    const bookListMock: Book[] = WISHLIST;
    const addBookMock = jest.fn();

    const { getByText, getByAltText, getAllByRole, getAllByText } = render(
      <BookList books={bookListMock} addBook={addBookMock} />
    );

    const books = getAllByRole('book-card');

    expect(books).toHaveLength(bookListMock.length);

    bookListMock.forEach((book) => {
      expect(getByText(book.title)).toBeInTheDocument();
      expect(getByAltText(book.title)).toBeInTheDocument();
      expect(
        getAllByText(book.publisher, {
          exact: false,
        })[0]
      ).toBeInTheDocument();

      if (book.authors.length > 0) {
        expect(
          getAllByText(new RegExp(`${book.authors.join(',')}`, 'i'), {
            exact: false,
          })[0]
        ).toBeInTheDocument();
      }
    });

    const AddWishlistButtons = getAllByRole('button', { name: /Wishlist/i });

    AddWishlistButtons.forEach((wishlistButton) => {
      fireEvent.click(wishlistButton);
    });

    expect(addBookMock).toHaveBeenCalledTimes(bookListMock.length);
  });

  test('empty list when no  books has been provided', () => {
    const bookListMock: Book[] = [];
    const addBookMock = jest.fn();

    const { queryAllByRole } = render(
      <BookList books={bookListMock} addBook={addBookMock} />
    );

    const books = queryAllByRole('book-card');

    expect(books).toHaveLength(0);
  });
});
