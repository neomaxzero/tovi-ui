import styled from 'styled-components';
import { primary } from '~/components/shared/MainColors';

export const ButtonWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 1.3em;
    padding: 0 0.5em;
    cursor: pointer;
    border-bottom: 1px solid white;

    &:hover {
        border-bottom: 1px solid ${primary};
    }
`