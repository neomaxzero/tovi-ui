import styled from 'styled-components';
import { primary, greyLine, error } from '~/components/shared/MainColors';

export const PopupContainer = styled.div`
  border-radius: 4px;
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
  width: 30em;
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: white;
  padding: 2em 1.5em;
  position: relative;
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

export const QuitResponsive = styled.form`
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;

  @media (min-width: 700px) {
		display: none;
	}
`