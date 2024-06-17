import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: () => void;
  styleOverrides?: React.CSSProperties;
};

const Button = ({ children, onClick, styleOverrides }: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button className="button" onClick={onClick} style={styleOverrides}>
      {children}
    </button>
  );
};

export default Button;
