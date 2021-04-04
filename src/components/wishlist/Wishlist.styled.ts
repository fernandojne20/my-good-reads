import styled from 'styled-components';

const Message = styled.span`
  color: ${(props) => props.theme.gray60};
  font-style: italic;
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${(props) => props.theme.gray85};
  margin-top: 0;
  font-size: 1.5rem;
`;

const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  padding: 0 1rem 1rem 1rem;
  border: 5px solid ${(props) => props.theme.blueAccent};
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 8.125rem;
`;

const Books = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Book = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.gray10};
  border-bottom: 1px solid ${(props) => props.theme.gray80};
  padding: ${(props) => `${props.theme.spacingxs} ${props.theme.spacingxxs}`};
`;
const Name = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 ${(props) => props.theme.spacingxxs} 0;
`;
const Author = styled.h4`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 300;
`;

export { Message, Title, WishListContainer, Books, Book, Name, Author };
