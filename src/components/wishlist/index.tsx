import React, { FunctionComponent } from 'react';
import { Book as IBook } from 'interfaces/Book';
import {
  WishListContainer,
  Message,
  Title,
  Books,
  Book,
  Name,
  Author,
} from './Wishlist.styled';

interface WishlistProps {
  books: IBook[];
}

const bookList = (books: IBook[]) => {
  return (
    <Books>
      {books.map((book: IBook) => {
        return (
          <Book key={book.id}>
            <Name>{book.title} </Name>
            <Author>By {book.authors?.join(',')}</Author>
          </Book>
        );
      })}
    </Books>
  );
};

const Wishlist: FunctionComponent<WishlistProps> = ({ books }) => {
  return (
    <WishListContainer>
      <Title>My Reading Wishlist ({books.length})</Title>
      {(!books || books.length === 0) && <Message>No books added</Message>}
      {books && books.length > 0 && bookList(books)}
    </WishListContainer>
  );
};

export default Wishlist;
