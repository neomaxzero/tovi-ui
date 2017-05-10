import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const ButtonWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 1.8em;
    cursor: pointer;
    border-bottom: 1px solid white;
    position: relative;

    &:hover {
        border-bottom: 1px solid ${primary};
    }
`

export const Avatar = styled.img`
    margin-left: 1em;
    height: 2.5em;
    border-radius: 50%;
`