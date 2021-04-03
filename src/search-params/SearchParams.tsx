import React, { useState, useEffect } from 'react';
import {
  SearchParamsContainer,
  SearchForm,
  SearchBar,
} from './SearchParams.styled';
interface SearchParamsProps {
  setSearch: string;
  updateBookTypeToSearch: (bookType: string) => void;
}
const SearchParams = ({
  updateBookTypeToSearch,
  setSearch,
}: SearchParamsProps) => {
  const [bookType, updateBookType] = useState('');

  useEffect(() => {
    if (setSearch) updateBookType(setSearch);
  }, [setSearch]);

  return (
    <SearchParamsContainer>
      <SearchForm
        onSubmit={(e) => {
          debugger;
          e.preventDefault();
          updateBookTypeToSearch(bookType);
        }}
      >
        <SearchBar
          autoFocus
          value={bookType}
          placeholder="Search for books to add to your reading list and press Enter"
          onChange={(e) => updateBookType(e.target.value)}
        />
      </SearchForm>
    </SearchParamsContainer>
  );
};

export default SearchParams;
