import { createContext, useCallback, useContext } from "react";

import { useSearchParamsState } from "./useSearchParamsState";

interface FiltersProviderProps {
  children: React.ReactNode;
}

interface Filters {
  name: string;
  orderBy: string;
}

interface FiltersContextProps {
  filters: Filters;
  onNameChange: (name: string) => void;
  onOrderByChange: (name: string) => void;
}

const FiltersContext = createContext<FiltersContextProps>(
  {} as FiltersContextProps
);

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [nameParam, setNameParam] = useSearchParamsState("name", "");
  const [orderByParam, setOrderByParam] = useSearchParamsState(
    "orderBy",
    "name"
  );

  const handleNameChange = useCallback(
    (name: string) => {
      setNameParam(name);
    },
    [setNameParam]
  );

  const handleOrderByChange = useCallback(
    (name: string) => {
      setOrderByParam(name);
    },
    [setOrderByParam]
  );

  return (
    <FiltersContext.Provider
      value={{
        filters: { name: nameParam, orderBy: orderByParam },
        onNameChange: handleNameChange,
        onOrderByChange: handleOrderByChange,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default function useFilters(): FiltersContextProps {
  const context = useContext(FiltersContext);
  return context;
}
