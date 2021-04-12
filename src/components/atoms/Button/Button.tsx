import * as React from "react";
import { StyledButton } from "./styled";

interface IProps {
  children?: string | HTMLElement;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
}
const Button: React.FC<IProps> = (props) => {
  const { text, disabled, onClick, children } = props;
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children || text}
    </StyledButton>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
