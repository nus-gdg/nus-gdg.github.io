import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "button" }: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
