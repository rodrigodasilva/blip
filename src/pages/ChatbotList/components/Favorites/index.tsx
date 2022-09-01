import Typography from "@/components/Typography";

import BotCard from "../BotCard";
import * as S from "./styles";

const Favorites: React.FC = () => {
  return (
    <section aria-label="Favorites">
      <Typography variant="h1-bold" color="neutral-desk" className="mb-16">
        Favorites
      </Typography>
      <S.FavoritesList>
        {[1, 2, 3, 4].map(index => (
          <BotCard
            key={index}
            bot={{
              name: "Bot fake",
              created: "2020-01-01T14:35:44.510Z",
              type: "builder",
            }}
          />
        ))}
      </S.FavoritesList>
    </section>
  );
};

export default Favorites;
