import Typography from "@/components/Typography";
import { useFavorites } from "@/hooks/useFavorites";

import BotCard from "../BotCard";
import CardListWrapper from "../CardListWrapper";
import Message from "../Message";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <section aria-label="Favorites">
      <Typography variant="h1-bold" color="neutral-desk" className="mb-16">
        Favorites
      </Typography>
      <CardListWrapper>
        {favorites?.length ? (
          favorites.map(favorite => (
            <li key={favorite.name} className="grid-item">
              <BotCard bot={favorite} />
            </li>
          ))
        ) : (
          <Message>No favorites added yet</Message>
        )}
      </CardListWrapper>
    </section>
  );
};

export default Favorites;
