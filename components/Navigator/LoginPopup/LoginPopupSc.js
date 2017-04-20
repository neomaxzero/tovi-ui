import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const PopupContainer = styled.div`
  border-radius: 4px;
  width: 30em;
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: white;
  padding: 2em 1.5em;
`;

export const OwnLoginPhrase = styled.span`
  margin-bottom: 0.6em;
`

export const LoginButtonSc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.secundary ? 'white' : primary};
  border: 1px solid ${primary};
  padding: 1em;
  width: 100%;
  cursor: pointer;
  color: ${props => props.secundary ? primary : 'white'};
  font-size: 1.1em;
  user-select: none; 
  
  &:hover {
    opacity: 0.8;
  }
`;

export const NewAccountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3em;
`;

export const NoAccQ = styled.p`
  margin-bottom: 0.6em;
  text-align: center;
`;