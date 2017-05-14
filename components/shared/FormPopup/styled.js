import styled from 'styled-components';
import { primary, greyLine, error } from '~/components/shared/MainColors';

export const PopupContainer = styled.div`
  border-radius: 4px;
  width: 30em;
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: white;
  padding: 2em 1.5em;
`;

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

export const Form = styled.form`
  width: 100%;
`;