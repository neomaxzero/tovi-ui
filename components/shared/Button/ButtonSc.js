import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const ButtonSc = styled.div`
  color: white;
  font-size: 1.4em;
  padding: 0.5em 1em;
  border-radius: 4px
  background-color: ${ primary }
  cursor: pointer;
  user-select: none;
`;