import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  //box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  background-color: #c3a7fc;
  color: #000;
  font-size: 18px;
  img {
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    top: 0;
    left: 0;
    border-radius: 50px;
  }

  .swatch {
    font-size: ${(props) => props.size * 0.5}px;
    position: absolute;
    font-family: inherit;
    user-select: none;
  }
`;

const StyledAvatar = ({ children, ...restProps }) => {
  return <Styled {...restProps}>{children}</Styled>;
};

export default StyledAvatar;
