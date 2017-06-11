import styled from 'styled-components';
import { primary, greyLine, error, linkColors } from '~/components/shared/MainColors';

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
  ${props => props.oStyle}
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

export const ErrorMessage = styled.p`
  margin-bottom: 0.6em;
  color: ${error};
  text-align: center;
`;

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