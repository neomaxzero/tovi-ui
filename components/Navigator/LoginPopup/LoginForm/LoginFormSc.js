import styled from 'styled-components';
import { primary, greyLine, error } from '~/components/shared/MainColors';

export const Field = styled.input`
  height: 2em;
  width: 100%;
  height: 3em;
  font-size: 1.1em;
  padding: 0 1em;
  border-radius: 4px;
  border:1px solid ${props => props.valid ? greyLine : error};
  margin-bottom: 0.5em;
`;

export const FormLogin = styled.form`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 0.6em;
  color: ${error};
  text-align: center;
`;