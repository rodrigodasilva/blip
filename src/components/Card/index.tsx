import cc from "classnames";

import iconStar from "@/assets/icons/icon-star.png";
import iconStarOutline from "@/assets/icons/icon-star-outline.png";

import * as S from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
}

const Card: React.FC<CardProps> = ({ children, height, ...props }) => {
  return (
    <S.CardWrapper className={cc(props.className)} height={height} {...props}>
      {children}
    </S.CardWrapper>
  );
};

interface CardOrverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  as?: React.ElementType;
}

export const CardOverlay: React.FC<CardOrverlayProps> = ({
  children,
  direction = "vertical",
  as: asProp = "div",
  ...props
}) => (
  <S.CardOverlay
    className={cc(`card__orverlay--${direction}`, props.className)}
    as={asProp}
    {...props}
  >
    {children}
  </S.CardOverlay>
);

interface CardActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  position?: "relative" | "absolute";
}

export const CardAction: React.FC<CardActionProps> = ({
  active,
  position = "absolute",
  className,
  ...rest
}) => {
  return (
    <S.CardAction
      className={cc(`card__action--${position}`, className)}
      {...rest}
    >
      {active ? (
        <img src={iconStar} alt="Icon star" />
      ) : (
        <img src={iconStarOutline} alt="Icon start outline" />
      )}
    </S.CardAction>
  );
};

export { CardDescription, CardImage, CardTitle } from "./styles";
export default Card;
