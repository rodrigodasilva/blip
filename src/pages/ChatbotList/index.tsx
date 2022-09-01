import { useState } from "react";

import Divider from "@/components/Divider";
import Typography from "@/components/Typography";
import useFetch from "@/hooks/useFetch";
import { ViewProvider } from "@/hooks/useView";
import DefaultLayout from "@/layouts/Default";

import Chatbots from "./components/Chatbots";
import Favorites from "./components/Favorites";
import Filters, { FilterChangeEvent } from "./components/Filters";
import * as S from "./styles";

export interface Filter {
  orderBy: "name" | "created";
  skip: number;
  take: number;
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

  return (
    <DefaultLayout>
      <S.ChatbotListHeader>
        <Typography variant="h1-extra">My chatbots</Typography>
        <Filters filters={filters} onFilterChange={handleFilterChange} />
      </S.ChatbotListHeader>
      <Favorites />
      <Divider className="my-40" />
      <Chatbots bots={bots} loading={loading} error={!!error} />
    </DefaultLayout>
  );
};

const ChabotListWithViewProvider = () => (
  <ViewProvider>
    <ChabotList />
  </ViewProvider>
);

export default ChabotListWithViewProvider;
