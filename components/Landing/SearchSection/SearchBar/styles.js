import styled from 'styled-components';
import { greyLine } from '~/components/shared/MainColors';

export const SearchSectionContainer = styled.div`
  border: 1px solid ${greyLine};
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
