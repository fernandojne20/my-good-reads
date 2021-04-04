import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchParams from '../SearchParams';

describe('SearchParams Component', () => {
  test('Search Bar functionality', () => {
    const searchBooksMock = jest.fn();
    const initialSearch = 'Javascript';
    const triggeredValue = 'Serverless';

    const { getByLabelText, rerender } = render(
      <SearchParams searchBooks={searchBooksMock} setSearch={initialSearch} />
    );

    const searchBar = getByLabelText('gsearch');

    expect(searchBar.value).toBe('Javascript');

    fireEvent.change(searchBar, { target: { value: triggeredValue } });

    expect(searchBooksMock).toBeCalledWith('Serverless');
    expect(searchBooksMock).toHaveBeenCalledTimes(1);

    rerender(
      <SearchParams searchBooks={searchBooksMock} setSearch={triggeredValue} />
    );

    expect(searchBar.value).toBe('Serverless');
  });
});
