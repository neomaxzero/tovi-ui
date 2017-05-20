import styled from 'styled-components';
import { linkColors } from '~/components/shared/MainColors';

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;

export const Linki = styled.a`
  text-decoration: none;
  color: ${linkColors};
  cursor: pointer; 
  &:hover {
    opacity: 0.8;
  }
`;