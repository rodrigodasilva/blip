import cc from "classnames";

import iconStar from "@/assets/icons/icon-star.png";
import iconStarOutline from "@/assets/icons/icon-star-outline.png";

import * as S from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({
  children,
  direction = "vertical",
  as: asProp = "div",
}) => {
  return (
    <S.CardWrapper className={cc(`card--${direction}`)} as={asProp}>
      {children}
    </S.CardWrapper>
  );
};

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
        <img src={iconStar} alt="Icon start" />
      ) : (
        <img src={iconStarOutline} alt="Icon start outline" />
      )}
    </S.CardAction>
  );
};

export {
  CardDescription,
  CardHeader,
  CardHorizontalContainer,
  CardImage,
  CardTitle,
} from "./styles";
export default Card;
