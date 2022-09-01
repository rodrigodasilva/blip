import Card, {
  CardAction,
  CardDescription,
  CardHeader,
  CardHorizontalContainer,
  CardImage,
  CardTitle,
} from "@/components/Card";
import Typography from "@/components/Typography";
import useView from "@/hooks/useView";

import * as S from "./styles";

interface CardProps {
  index: string | number;
}

const CardHorizontal: React.FC<CardProps> = ({ index, ...props }) => (
  <CardHorizontalContainer as="li" {...props}>
    <CardAction active={index === 2} position="relative" />
    <Card direction="horizontal">
      <CardHeader>
        <CardImage
          src="https://testing-library.com/img/octopus-64x64.png"
          size="small"
        />
        <CardTitle>Title {index}</CardTitle>
      </CardHeader>
      <CardDescription>Created at 14/09/2022</CardDescription>
    </Card>
  </CardHorizontalContainer>
);

const CardVertical: React.FC<CardProps> = ({ index, ...props }) => (
  <Card direction="vertical" as="li" {...props}>
    <CardAction active={index === 2} />
    <CardImage
      className="mb-16"
      src="https://testing-library.com/img/octopus-64x64.png"
    />
    <CardTitle>Title {index}</CardTitle>
    <CardDescription>Description</CardDescription>
  </Card>
);

const Favorites: React.FC = () => {
  const { view } = useView();

  const Card = view === "block" ? CardVertical : CardHorizontal;

  return (
    <section aria-label="Favorites">
      <Typography variant="h1-bold" color="neutral-desk" className="mb-16">
        Favorites
      </Typography>
      <S.FavoritesList>
        {[1, 2, 3, 4].map(index => (
          <Card key={index} index={index} />
        ))}
      </S.FavoritesList>
    </section>
  );
};

export default Favorites;
