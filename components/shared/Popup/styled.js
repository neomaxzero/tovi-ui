import styled from 'styled-components';
import { greyLine } from '../MainColors';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;  
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: ${greyLine};
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 0.7em 0.5em;
  font-size: 1.5em;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  position: relative;
`
export  const Body = styled.div``;

export const Icon = styled.div`
    position: absolute;
    top: 0.8em;
    left: 1em;
`;

export const ContainerMedium = styled.div`
  width: ${props => props.size ? props.size : '30em'};
  padding: 2em;
`

export const ButtonContainer = styled.div`
  width: 20em;
  margin: 0 auto;
`
export const Phrase = styled.span`
  display: block;
  text-align: center;
`
export const MessageContainer = styled.div`
  padding-bottom: 2em;
`