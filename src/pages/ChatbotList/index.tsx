import { useMemo, useState } from "react";

import Divider from "@/components/Divider";
import Typography from "@/components/Typography";
import { FavoritesProvider } from "@/hooks/useFavorites";
import useFetch from "@/hooks/useFetch";
import { ViewProvider } from "@/hooks/useView";

import Chatbots from "./components/Chatbots";
import Favorites from "./components/Favorites";
import Filters, { FilterChangeEvent } from "./components/Filters";
import * as S from "./styles";

export interface Filter {
  orderBy: "name" | "created";
  skip: number;
  take: number;
  name: string;
}

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

const ChabotList: React.FC = () => {
  const [filters, setFilters] = useState<Filter>({
    orderBy: "name",
    skip: 0,
    take: 20,
    name: "",
  });

  const {
    data: bots,
    loading,
    error,
  } = useFetch<Bot[]>(
    `https://front-end-test.beta-cs.blip.ai/bots?Skip=${filters.skip}&Take=${filters.take}&Filters[orderBy]=${filters.orderBy}`
  );

  const handleFilterChange = ({ name, value }: FilterChangeEvent) => {
    setFilters(prevState => ({ ...prevState, [name]: value }));
  };

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
        <Filters filters={filters} onFilterChange={handleFilterChange} />
      </S.ChatbotListHeader>
      <Favorites />
      <Divider className="my-40" />
      <Chatbots bots={filteredChatbots} loading={loading} error={!!error} />
    </>
  );
};

const ChabotListWithProvides = () => (
  <FavoritesProvider>
    <ViewProvider>
      <ChabotList />
    </ViewProvider>
  </FavoritesProvider>
);

export default ChabotListWithProvides;
