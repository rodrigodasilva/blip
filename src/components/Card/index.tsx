import iconStar from "@/assets/icons/icon-star.svg";
import iconStarOutline from "@/assets/icons/icon-star-outline.svg";

import * as S from "./styles";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ children }) => {
  return <S.CardWrapper>{children}</S.CardWrapper>;
};

interface CardActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const CardAction: React.FC<CardActionProps> = ({ active }) => {
  return (
    <S.CardAction>
      {active ? (
        <img src={iconStar} alt="Icon start" />
      ) : (
        <img src={iconStarOutline} alt="Icon start outline" />
      )}
    </S.CardAction>
  );
};

export { CardDescription, CardImage, CardTitle } from "./styles";
export default Card;
