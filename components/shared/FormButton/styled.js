import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const FormButtonSc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => (props.secundary ? 'white' : primary)};
  border: 1px solid ${primary};
  padding: 1em;
  width: 100%;
  cursor: ${props => (props.loading ? 'default' : 'pointer')};
  color: ${props => (props.secundary ? primary : 'white')};
  font-size: 1.1em;
  user-select: none;
  height: 3.2em;

  &:hover {
    opacity: ${props => (props.loading ? '1' : '0.8')};
  }

  ${props => props.oStyle};
`;
