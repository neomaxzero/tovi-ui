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

export const LoginButtonSc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${primary};
  padding: 1em;
  width: 100%;
  cursor: pointer;
  color: white;
  font-size: 1.1em;

  &:hover {
    opacity: 0.8;
  }
`;