import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const ListContainer = styled.ul`
    position: absolute;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    background-color: white;
`
export const ItemSy = styled.li`
    list-style-type: none;
    font-size: 1.6em;
    padding: 0.5em;
    cursor: pointer;
    font-weight: 300;
    border-bottom: 1px solid white;

    &:hover {
      border-bottom: 1px solid ${primary};
    }
`