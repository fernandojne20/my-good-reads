import styled from 'styled-components';

const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 10px;
`;

const BookCard = styled.div`
  background-color: white;
  display: flex;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px) translateX(2px);
  }
`;

const BookCover = styled.div`
  position: relative;
  width: 12rem;
  flex: none;
  box-sizing: border-box;
`;

const BookImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
`;

const BookDetails = styled.div`
  flex: 1 1 auto;
  /* flex-direction: column; */
  padding: 1.5rem;
  background-color: ${(props) => props.theme.blueAccent};
  color: ${(props) => props.theme.gray05};
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Author = styled.h3`
  font-size: 1rem;
  font-weight: 300;
`;

const Published = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export {
  BookListContainer,
  BookCard,
  BookCover,
  BookImg,
  BookDetails,
  Description,
  Title,
  Author,
  Published,
};
