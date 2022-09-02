import React from "react";

import useView from "@/hooks/useView";

import * as S from "./styles";

type CardListProps = { children: React.ReactNode };

const CardListWrapper: React.ForwardRefRenderFunction<
  HTMLUListElement,
  CardListProps
> = ({ children }, ref) => {
  const { view } = useView();

  return (
    <S.CardGridWrapper ref={ref} className={`card-grid--${view}`}>
      {children}
    </S.CardGridWrapper>
  );
};

export default React.forwardRef<HTMLUListElement, CardListProps>(
  CardListWrapper
);
