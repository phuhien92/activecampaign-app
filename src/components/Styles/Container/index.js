import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;
    max-width: 1320px;
    svg {
        height: 1.5em;
        width: 1.5em;
        margin-left: 0.5em;
        margin-right: 0%.5em;
        color: inherit;
    }
`;

const Container = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container;
