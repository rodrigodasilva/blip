import Card, {
  CardAction,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/Card";
import Typography from "@/components/Typography";

import * as S from "./styles";

const Favorites: React.FC = () => {
  return (
    <S.FavoritesWrapper>
      <Typography variant="h1-bold" color="neutral-desk">
        Favorites
      </Typography>
      <S.FavoritesList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
          <li key={index}>
            <Card>
              <CardAction active={index === 2} />
              <CardImage src="https://testing-library.com/img/octopus-64x64.png" />
              <CardTitle>Title {index}</CardTitle>
              <CardDescription>Description</CardDescription>
            </Card>
          </li>
        ))}
      </S.FavoritesList>
    </S.FavoritesWrapper>
  );
};

export default Favorites;
