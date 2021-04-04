import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import {
  BookContainer,
  EmptySearch,
  Link,
  BookSearchContainer,
} from './BookSearch.styled';
import SearchParams from 'components/search-params/SearchParams';
import Wishlist from 'components/wishlist';
import BookList from 'components/book-list';
import { useBookMachine } from 'hooks/useBookMachine';

const BookSearch = () => {
  const {
    wishlist,
    addBook,
    searchBooks,
    bookTypeToSearch,
    books,
  } = useBookMachine();

  return (
    <BookSearchContainer>
      <BookContainer>
        <SearchParams searchBooks={searchBooks} setSearch={bookTypeToSearch} />
        {!bookTypeToSearch && (
          <EmptySearch>
            <p>
              Try searching for a topic, for example
              <Link
                onClick={() => {
                  searchBooks('Javascript');
                }}
              >
                {' '}
                "Javascript"
              </Link>
            </p>
          </EmptySearch>
        )}
        <BookList books={books} addBook={addBook} />
      </BookContainer>
      <Wishlist books={wishlist} />
    </BookSearchContainer>
  );
};

export default BookSearch;
