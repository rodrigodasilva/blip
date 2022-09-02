import { Link } from "react-router-dom";

import Card, {
  CardAction,
  CardDescription,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/Card";
import { useFavorites } from "@/hooks/useFavorites";
import useView from "@/hooks/useView";
import parseShortName from "@/utils/parseShortName";

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
  shortName: string;
}

const CardHorizontal: React.FC<CardProps> = ({
  bot,
  active,
  onFavoriteToggle,
  shortName,
  ...props
}) => {
  const formattedDate = new Date(bot?.created).toLocaleString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <CardOverlay direction="horizontal" {...props}>
      <CardAction
        active={active}
        position="relative"
        onClick={onFavoriteToggle}
      />
      <Link to={`/${shortName}/details`} className="w-full">
        <Card className="flex justify-between items-center flex-wrap ">
          <div className="flex items-center">
            <CardImage src={bot.image} size="small" className="mr-8" />
            <CardTitle>{bot.name}</CardTitle>
          </div>
          <CardDescription>Created at {formattedDate}</CardDescription>
        </Card>
      </Link>
    </CardOverlay>
  );
};

const CardVertical: React.FC<CardProps> = ({
  bot,
  active,
  onFavoriteToggle,
  shortName,
  ...props
}) => (
  <CardOverlay>
    <CardAction active={active} onClick={onFavoriteToggle} />
    <Link to={`/${shortName}/details`}>
      <Card className="flex-col items-center" {...props}>
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

  const botName = props.bot.name;

  const active = isFavorite(botName);
  const shortName = parseShortName(botName);

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
        shortName={shortName}
        onFavoriteToggle={handleFavoriteToggle}
        {...props}
      />
    );

  return (
    <CardVertical
      active={active}
      shortName={shortName}
      onFavoriteToggle={handleFavoriteToggle}
      {...props}
    />
  );
};

export default BotCard;
