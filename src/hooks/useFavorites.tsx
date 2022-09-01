import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesContextData {
  favorites: Bot[];
  addFavorite: (bot: Bot) => void;
  removeFavorite: (name: string) => void;
  isFavorite: (name: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

const STORAGE_KEY = "@blip:favorites";

export function FavoritesProvider({
  children,
}: FavoritesProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Bot[]>(() => {
    const storagedFavorites = localStorage.getItem(STORAGE_KEY);

    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }

    return [];
  });

  const findFavorite = (name: string) => {
    return favorites.find(favorite => favorite.name === name);
  };

  const addFavorite = (bot: Bot) => {
    const findBot = findFavorite(bot.name);
    if (findBot) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites, bot]));
    setFavorites(prevState => [...prevState, bot]);
  };

  const removeFavorite = (name: string) => {
    const findBot = findFavorite(name);
    if (!findBot) return;

    const updatedFavorites = favorites.filter(
      favorite => favorite.name !== name
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const isFavorite = useCallback(
    (name: string) => {
      return !!favorites.find(favorite => favorite.name === name);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);
  return context;
}
