import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #6f3665;
  border-radius: 10px;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  padding: 2px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  :hover {
    background-color: #90487f;
  }
  :active {
    position: relative;
    top: 1px;
  }
  ${(props) =>
        props.primary &&
        css`
      color: white;
      padding: 5px 15px;
      margin-left: 10px;
      @media (max-width: 450px) {
        margin: 0 auto;
        margin-top: 5px;
      }
    `}
  ${(props) =>
        props.delete &&
        css`
      float: right;
    `}
`;