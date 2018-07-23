import styled from 'styled-components';
import { greyLine, primary } from '~/components/shared/MainColors';
import FA from 'react-fontawesome';

export const SearchSectionContainer = styled.div`
  border: 1px solid ${greyLine};
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8em;
  width: 100%;
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 31%;
  right: 8%;
  font-size: 1.2em;
`;

export const SearchComponent = props => (
  <SearchButton>
    <FA name="search" {...props} style={{ color: primary }} rotate={90} />
  </SearchButton>
);
