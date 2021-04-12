import * as React from "react";
import { StyledInput } from "./styled";

interface IProps {
  value: string;
  onChange: () => void;
  placeholder: string;
}
const Input: React.FC<IProps> = (props) => {
  const { value, onChange, placeholder } = props;
  return (
    <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};

Input.defaultProps = {
  placeholder: "What needs to be rolled",
};

export default Input;
