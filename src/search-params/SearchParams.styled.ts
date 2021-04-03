import Styled from 'styled-components';

const SearchParamsContainer = Styled.div`
  flex-grow: 3;
`;

const SearchForm = Styled.form`
  margin-bottom: ${(props) => props.theme.spacingxs};
`;

const SearchBar = Styled.input.attrs({ name: 'gsearch', type: 'search' })`
  width: 100%;
`;

export { SearchParamsContainer, SearchForm, SearchBar };
