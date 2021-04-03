import styled from 'styled-components';

const Message = styled.span`
  color: ${(props) => props.theme.gray60};
  font-style: italic;
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${(props) => props.theme.gray85};
  margin-top: 0;
`;

const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 18.75rem;
  padding: 0 1rem 1rem 1rem;
`;

const Books = styled.ul``;
const Book = styled.li``;
const Name = styled.h3``;
const Author = styled.h4``;

export { Message, Title, WishListContainer, Books, Book, Name, Author };
