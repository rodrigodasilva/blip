import Logo from "@/assets/logo.svg";
import Header from "@/components/Header";

import * as S from "./styles";

type DefaultLayoutProps = { children: React.ReactNode };

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <S.DefaultLayoutWrapper>
      <Header>
        <img alt="Blip logo" src={Logo} />
      </Header>
      <S.DefaultLayoutContent>{children}</S.DefaultLayoutContent>
    </S.DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
