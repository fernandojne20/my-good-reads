import styled from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: stretch;
`;

const EmptySearch = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray40};
`;

const Link = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.blueAccent};

  &:hover {
    color: ${(props) => props.theme.blueDark};
  }
`;

export { BookContainer, EmptySearch, Link };
