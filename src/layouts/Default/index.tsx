import logoImage from "@/assets/logo.png";
import Header from "@/components/Header";

import * as S from "./styles";

type DefaultLayoutProps = { children: React.ReactNode };

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <S.DefaultLayoutWrapper>
      <Header>
        <img alt="Blip logo" src={logoImage} />
      </Header>
      <S.DefaultLayoutContent>{children}</S.DefaultLayoutContent>
    </S.DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
