import React, { FunctionComponent } from 'react';
import { Book } from 'interfaces/Book';
import {
  BookListContainer,
  BookCard,
  BookCover,
  BookImg,
  BookDetails,
  Description,
  Title,
  Author,
  Published,
} from './BookList.styled';

interface BookListProps {
  books: Book[];
}
const BookList: FunctionComponent<BookListProps> = ({ books }) => {
  return (
    <BookListContainer>
      {books.map((book) => (
        <BookCard key={book.id}>
          <BookCover>
            <BookImg src={book.coverUrl} />
          </BookCover>
          <BookDetails>
            <Title>{book.title}</Title>
            <Author>
              <strong>by </strong>
              {book.authors?.join(',')}
              {book.publishedDate && ' | '}
              {book.publishedDate &&
                book.publishedDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
            </Author>
            {book.publisher && (
              <Published>
                <strong>Published By</strong> {book.publisher}
              </Published>
            )}
            <Description>{book.description}</Description>
          </BookDetails>
        </BookCard>
      ))}
    </BookListContainer>
  );
};

export default BookList;
