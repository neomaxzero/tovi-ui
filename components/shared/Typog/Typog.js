import styled from 'styled-components';
import { colorTitles } from '~/components/shared/MainColors';

export const H2 = styled.h2`
  font-size: 24px;
  color:${colorTitles};
  text-align: ${props => props.center && 'center'};
  margin: 24px 0px;
`;
