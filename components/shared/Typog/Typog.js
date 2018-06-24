import styled from 'styled-components';
import { colorTitles } from '~/components/shared/MainColors';

export const H2 = styled.h2`
  font-size: 1.2rem;
  color:${colorTitles};
  text-align: ${props => props.center && 'center'};
  margin: 1.2rem 0px;
`;
