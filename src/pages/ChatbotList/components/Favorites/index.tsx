import Typography from "@/components/Typography";
import { useFavorites } from "@/hooks/useFavorites";

import BotCard from "../BotCard";
import Message from "../Message";
import * as S from "./styles";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <section aria-label="Favorites">
      <Typography variant="h1-bold" color="neutral-desk" className="mb-16">
        Favorites
      </Typography>
      <S.FavoritesList>
        {favorites?.length ? (
          favorites.map(favorite => (
            <BotCard key={favorite.name} bot={favorite} />
          ))
        ) : (
          <Message>No favorites added yet</Message>
        )}
      </S.FavoritesList>
    </section>
  );
};

export default Favorites;
