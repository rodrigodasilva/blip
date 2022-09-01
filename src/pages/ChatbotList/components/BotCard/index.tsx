import { Link } from "react-router-dom";

import Card, {
  CardAction,
  CardDescription,
  CardHeader,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/Card";
import { useFavorites } from "@/hooks/useFavorites";
import useView from "@/hooks/useView";

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

interface CardProps {
  bot: Bot;
  onFavoriteToggle: () => void;
  active: boolean;
}

const CardHorizontal: React.FC<CardProps> = ({
  bot,
  active,
  onFavoriteToggle,
  ...props
}) => (
  <CardOverlay as="li" direction="horizontal" {...props}>
    <CardAction
      active={active}
      position="relative"
      onClick={onFavoriteToggle}
    />
    <Link to="/details">
      <Card direction="horizontal">
        <CardHeader>
          <CardImage src={bot.image} size="small" />
          <CardTitle>{bot.name}</CardTitle>
        </CardHeader>
        <CardDescription>Created at {bot.created}</CardDescription>
      </Card>
    </Link>
  </CardOverlay>
);

const CardVertical: React.FC<CardProps> = ({
  bot,
  active,
  onFavoriteToggle,
  ...props
}) => (
  <CardOverlay as="li">
    <CardAction active={active} onClick={onFavoriteToggle} />
    <Link to="/details">
      <Card direction="vertical" {...props}>
        <CardImage className="mb-16" src={bot.image} />
        <CardTitle>{bot.name}</CardTitle>
        <CardDescription>{bot.type}</CardDescription>
      </Card>
    </Link>
  </CardOverlay>
);

type BotCardProps = { bot: Bot };

const BotCard: React.FC<BotCardProps> = props => {
  const { view } = useView();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const active = isFavorite(props.bot.name);

  const handleFavoriteToggle = () => {
    if (active) {
      removeFavorite(props.bot.name);
      return;
    }

    addFavorite(props.bot);
  };

  if (view === "list")
    return (
      <CardHorizontal
        active={active}
        onFavoriteToggle={handleFavoriteToggle}
        {...props}
      />
    );

  return (
    <CardVertical
      active={active}
      onFavoriteToggle={handleFavoriteToggle}
      {...props}
    />
  );
};

export default BotCard;
