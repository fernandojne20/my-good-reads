import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <main>
          <BookSearch />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
