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

  @media (max-width: 769px) {
  }

  @media (max-width: 1280px) and (min-width: 770px) {
    width: 80%;
  }

  @media (min-width: 1281px) {
    width: 80%;
  }
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8em;
  width: 100%;

  @media (max-width: 769px) {
    
  }

  @media (max-width: 1280px) and (min-width: 770px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 90%;
  }

  @media (min-width: 1281px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 90%;
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 31%;
  right: 8%;
  font-size: 1.2em;
  cursor: pointer;
`;

export const SearchComponent = props => (
  <SearchButton>
    <FA name="search" {...props} style={{ color: primary }} rotate={90} />
  </SearchButton>
);
