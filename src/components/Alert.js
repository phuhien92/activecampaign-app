import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.p`
    display: flex;
    padding: 15px;
    background-color: var(--color-red-100);
    color: var(--color-red-500);
    width:auto;
`;
const Alert = ({ error }) => {
    return (
        <StyledAlert>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
            <label>{error}. Refresh and try again!</label>
        </StyledAlert>
    )
}

export default Alert;