import styled from 'styled-components';
import { primary, secundary, greyLine } from '~/components/shared/MainColors';
import { animate } from '~/utils/animateGenerator';

export const List = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  border: 1px solid ${greyLine};
  border-color: ${greyLine};
  ${animate('flipInX','0.2s')}

  &::before {
    content:"";
    border-style: solid;
    border-width: 5px;
    border-color: transparent transparent ${greyLine} transparent;
    position: absolute;
    left: 50%;
    top: -10px;
  }

    
`;

export const Arrow = styled.div`

`;
export const Item = styled.li`
  width: 100%;
  text-align: center;
  padding: 0.3em 0;
  font-size: 0.9em;
  
  &:hover {
    color: ${primary}
  }
`;