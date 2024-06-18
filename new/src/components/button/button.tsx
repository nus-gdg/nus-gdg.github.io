import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: () => void;
};

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
