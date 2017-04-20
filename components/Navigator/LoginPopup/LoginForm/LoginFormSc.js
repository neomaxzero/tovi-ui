import styled from 'styled-components';
import { primary, greyLine } from '~/components/shared/MainColors';

export const Field = styled.input`
  height: 2em;
  width: 100%;
  height: 3em;
  font-size: 1.1em;
  padding: 0 1em;
  border-radius: 4px;
  border:1px solid ${greyLine};
  margin-bottom: 0.5em;
`;

export const FormLogin = styled.form`
  width: 100%;
`;
