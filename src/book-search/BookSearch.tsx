import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import { BookContainer, EmptySearch, Link } from './BookSearch.styled';
import SearchParams from '../search-params/SearchParams';

const BookSearch = () => {
  const [initialSearch, updateInitialSearch] = useState('');
  const [bookTypeToSearch, updateBookTypeToSearch] = useState('');
  const [allAvailableBooks, setAllAvailableBooks] = useState([]);

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
    <>
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
      </BookContainer>
      {<pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>}
    </>
  );
};

export default BookSearch;
