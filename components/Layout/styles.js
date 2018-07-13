import StyleReactSelect from './stylesReactSelect';
import styled from 'styled-components';

const global = () =>
  <style>
    {`
    * {
      box-sizing: border-box;
      font-family: Lato, sans-serif;
      color: #333;
    }

    ul {
      list-style-type: none;
      margin:0;
      padding: 0;
    }
    
    body, p { 
      margin: 0;
    }

    a {
      text-decoration: none;
    }
    
    textarea:focus, input:focus{
      outline: none;
    }
    
    ${StyleReactSelect}
    `}
  </style>;

export const CenterMessage = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const BodyWrapper = styled.div`
  padding: 0.8em 2.4em;
`;

export default global;
