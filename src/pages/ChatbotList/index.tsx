import Typography from "@/components/Typography";
import DefaultLayout from "@/layouts/Default";

import Favorites from "./components/Favorites";
import Filters from "./components/Filters";
import * as S from "./styles";

const ChabotList: React.FC = () => {
  return (
    <DefaultLayout>
      <S.ChatbotListHeader>
        <Typography variant="h1-extra">My chatbots</Typography>
        <Filters />
      </S.ChatbotListHeader>
      <Favorites />
    </DefaultLayout>
  );
};

export default ChabotList;
