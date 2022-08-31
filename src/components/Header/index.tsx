import React from "react";

import * as S from "./styles";

type HeaderProps = { children: React.ReactNode };

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <S.HeaderWrapper>{children}</S.HeaderWrapper>;
};

export default Header;
