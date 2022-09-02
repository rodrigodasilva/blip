import { Link } from "react-router-dom";

import logoImage from "@/assets/logo.png";
import Header from "@/components/Header";

import * as S from "./styles";

type DefaultLayoutProps = { children: React.ReactNode };

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <S.DefaultLayoutWrapper>
      <Header>
        <Link to="/">
          <img alt="Blip logo" src={logoImage} />
        </Link>
      </Header>
      <S.DefaultLayoutContent>
        <S.DefaultLayoutChildren>{children}</S.DefaultLayoutChildren>
      </S.DefaultLayoutContent>
    </S.DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
