import styled from 'styled-components';
import { primary, greyLine, error } from '~/components/shared/MainColors';

export const Field = styled.input`
  height: 2em;
  width: 100%;
  height: 3em;
  font-size: 1.1em;
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid ${props => (props.valid ? greyLine : error)};
  margin-top: 0.5em;
  ${props => props.oStyle};
`;

export const Error = styled.div`
  color: ${error};
  padding-left: 1em;
  margin-bottom: 0.5em;
`;

export const BorderSelect = styled.div`
  .Select-control {
    border: 1px solid ${props => (props.valid ? greyLine : error)};
  }
`;
