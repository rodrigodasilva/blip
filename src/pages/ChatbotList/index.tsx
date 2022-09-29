import { useMemo } from "react";

import Divider from "@/components/Divider";
import Typography from "@/components/Typography";
import { FavoritesProvider } from "@/hooks/useFavorites";
import useFetch from "@/hooks/useFetch";
import useFilters, { FiltersProvider } from "@/hooks/useFilters";
import { ViewProvider } from "@/hooks/useView";

import Chatbots from "./components/Chatbots";
import Favorites from "./components/Favorites";
import Filters from "./components/Filters";
import * as S from "./styles";

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

const SKIP = 0;
const TAKE = 20;

const ChabotList: React.FC = () => {
  const { filters } = useFilters();

  const {
    data: bots,
    loading,
    error,
  } = useFetch<Bot[]>(
    `https://front-end-test.beta-cs.blip.ai/bots?Skip=${SKIP}&Take=${TAKE}&Filters[orderBy]=${filters.orderBy}`
  );

  const filteredChatbots = useMemo(() => {
    if (!filters.name) return bots;
    if (!bots?.length) return [];

    return bots.filter(bot =>
      bot.name?.trim().toLowerCase().includes(filters.name.trim().toLowerCase())
    );
  }, [bots, filters.name]);

  return (
    <>
      <S.ChatbotListHeader>
        <Typography variant="h1-extra">My chatbots</Typography>
        <Filters />
      </S.ChatbotListHeader>
      <Favorites />
      <Divider className="my-40" />
      <Chatbots bots={filteredChatbots} loading={loading} error={!!error} />
    </>
  );
};

const ChabotListWithProvides = () => (
  <FiltersProvider>
    <FavoritesProvider>
      <ViewProvider>
        <ChabotList />
      </ViewProvider>
    </FavoritesProvider>
  </FiltersProvider>
);

export default ChabotListWithProvides;
