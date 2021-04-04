import React, { useState, FunctionComponent } from 'react';
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

  const onTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceInterval);
    const value = e.target.value;
    searchBooks(value);

    /* This debounce handle the case to detech when we have finished typing 
    and search for the last value typed */
    const interval = setTimeout(() => {
      searchBooks(value);
    }, 500);

    updateDebounceInterval(interval);
  };

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
          onChange={onTyping}
        />
      </SearchForm>
    </SearchParamsContainer>
  );
};

export default SearchParams;
