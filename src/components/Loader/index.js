import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: center;
  padding: 30px 10px;
  font-weight: 600;
`;
const Loader = ({ text }) => {
  return <StyledWrapper>{text}</StyledWrapper>;
};

export default Loader;
