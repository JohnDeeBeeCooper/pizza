import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 7px;
  border: 1px solid #6f3662;
  border-radius: 10px;
  background: #f8f8f2 !important;
  outline: none;
  height: 25px;
  min-width: 300px;
  max-width: 600px;
  color: #cccccc;
  font-size: 15pt;
  font-family: "Arial";
  &:focus {
    color: #000000;
    border: 1px solid #000000;
  }
`;