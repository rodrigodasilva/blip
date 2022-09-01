import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
  color?: "primary" | "neutral";
  active?: boolean;
}

const IconButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.IconButtonWrapper {...rest}>{children}</S.IconButtonWrapper>;
};

export default IconButton;
