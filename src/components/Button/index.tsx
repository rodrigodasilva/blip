import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
  color?: "primary" | "neutral";
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  className = "",
  children,
  ...rest
}) => {
  return (
    <S.ButtonWrapper
      className={`button--${variant} button--${color} ${className}`}
      {...rest}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
