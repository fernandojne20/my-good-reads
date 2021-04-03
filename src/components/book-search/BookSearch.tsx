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
import { Book } from 'interfaces/Book';
import BookList from 'components/book-list';

const BookSearch = () => {
  const [initialSearch, updateInitialSearch] = useState('');
  const [bookTypeToSearch, updateBookTypeToSearch] = useState('');
  const [allAvailableBooks, setAllAvailableBooks] = useState<Book[]>([]);

  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      setAllAvailableBooks(allBooks);
    }
  }

  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks();
  }, [bookTypeToSearch]);
  return (
    <BookSearchContainer>
      <BookContainer>
        <SearchParams
          updateBookTypeToSearch={updateBookTypeToSearch}
          setSearch={initialSearch}
        />
        {!bookTypeToSearch && (
          <EmptySearch>
            <p>
              Try searching for a topic, for example
              <Link
                onClick={() => {
                  updateInitialSearch('Javascript');
                }}
              >
                {' '}
                "Javascript"
              </Link>
            </p>
          </EmptySearch>
        )}
        <BookList books={allAvailableBooks} />
      </BookContainer>
      <Wishlist books={[]} />
    </BookSearchContainer>
  );
};

export default BookSearch;
