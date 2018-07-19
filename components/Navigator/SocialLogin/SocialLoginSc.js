import styled from 'styled-components';

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  width: 100%;
`;

export const FacebookButtonSc = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  background-color: #3b5998;
  padding: 1em;
  width: 100%;
  height: 3.2em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const FacebookPhrase = styled.span`
  color: white;
  font-size: 1.1em;
`;

export const OneClickPhrase = styled.p`
  margin-bottom: 0.9em;
  cursor: default;
`;
