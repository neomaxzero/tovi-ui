import styled from 'styled-components';
import { error } from '~/components/shared/MainColors';

export const DropDownContainer = styled.div`
  display: inline-block;
  width: 6.4em;
`;
export const Title = styled.span`
  display: block;
  padding-left: 0.5em;
  padding-top: 0.7em;
`;

export const DateContainer = styled.div`
  display: inline-block;
  margin-left: 1.5em;
`;

export const Day = styled.div`
  width: 5em;
  display: inline-block;

  .Select-input > input {
    max-width: 1.5em !important;
  }
`;

export const Month = styled.div`
  margin-left: 0.5em;
  width: 7em;
  display: inline-block;

  .Select-input > input {
    max-width: 3em !important;
  }
`;

export const Year = styled.div`
  margin-left: 0.5em;
  width: 5em;
  display: inline-block;

  .Select-input > input {
    max-width: 2em !important;
  }
`;

export const CheckboxContainer = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
`;
export const Dmy = styled.div``;

export const ErrorMsg = styled.div`
  color: ${error};
  margin: 0 auto;
  text-align: center;
  padding-bottom: 0.5em;
`;

export const DropDownsInline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaptchaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
`;
