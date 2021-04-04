import React, { useState, useEffect, FunctionComponent } from 'react';
import {
  SearchParamsContainer,
  SearchForm,
  SearchBar,
} from './SearchParams.styled';
interface SearchParamsProps {
  setSearch: string;
  searchBooks: (bookType: string) => void;
}
const SearchParams: FunctionComponent<SearchParamsProps> = ({
  searchBooks,
  setSearch,
}) => {
  const [debounceInterval, updateDebounceInterval] = useState<any>(0);
  return (
    <SearchParamsContainer>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <SearchBar
          autoFocus
          value={setSearch}
          placeholder="Search for books to add to your reading list and press Enter"
          onChange={(e) => {
            clearTimeout(debounceInterval);
            const value = e.target.value;
            searchBooks(value);

            const interval = setTimeout(() => {
              searchBooks(value);
            }, 500);

            updateDebounceInterval(interval);
          }}
        />
      </SearchForm>
    </SearchParamsContainer>
  );
};

export default SearchParams;
