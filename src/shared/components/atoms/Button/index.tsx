import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
