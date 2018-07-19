import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const ButtonSc = styled.div`
  color: white;
  font-size: 1.2em;
  padding: 0.6em 1.2em;
  border-radius: 4px
  background-color: ${primary}
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;
