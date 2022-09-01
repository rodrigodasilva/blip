import Card, {
  CardAction,
  CardDescription,
  CardHeader,
  CardHorizontalContainer,
  CardImage,
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
  <CardHorizontalContainer as="li" {...props}>
    <CardAction
      active={active}
      position="relative"
      onClick={onFavoriteToggle}
    />
    <Card direction="horizontal">
      <CardHeader>
        <CardImage src="" size="small" />
        <CardTitle>{bot.name}</CardTitle>
      </CardHeader>
      <CardDescription>Created at {bot.created}</CardDescription>
    </Card>
  </CardHorizontalContainer>
);

const CardVertical: React.FC<CardProps> = ({
  bot,
  active,
  onFavoriteToggle,
  ...props
}) => (
  <Card direction="vertical" as="li" {...props}>
    <CardAction active={active} onClick={onFavoriteToggle} />
    <CardImage className="mb-16" src="" />
    <CardTitle>{bot.name}</CardTitle>
    <CardDescription>{bot.type}</CardDescription>
  </Card>
);

interface BotCardProps {
  bot: Bot;
}

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
