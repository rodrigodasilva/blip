import useView from "@/hooks/useView";

import * as S from "./styles";

type CardListProps = { children: React.ReactNode };

const CardListWrapper: React.FC<CardListProps> = ({ children }) => {
  const { view } = useView();

  return (
    <S.CardGridWrapper className={`card-grid--${view}`}>
      {children}
    </S.CardGridWrapper>
  );
};

export default CardListWrapper;
