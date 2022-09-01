import Card, {
  CardAction,
  CardDescription,
  CardHeader,
  CardHorizontalContainer,
  CardImage,
  CardTitle,
} from "@/components/Card";
import useView from "@/hooks/useView";

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

interface CardProps {
  bot: Bot;
}

const CardHorizontal: React.FC<CardProps> = ({ bot, ...props }) => (
  <CardHorizontalContainer as="li" {...props}>
    <CardAction active={false} position="relative" />
    <Card direction="horizontal">
      <CardHeader>
        <CardImage src="" size="small" />
        <CardTitle>{bot.name}</CardTitle>
      </CardHeader>
      <CardDescription>Created at {bot.created}</CardDescription>
    </Card>
  </CardHorizontalContainer>
);

const CardVertical: React.FC<CardProps> = ({ bot, ...props }) => (
  <Card direction="vertical" as="li" {...props}>
    <CardAction active={false} />
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

  if (view === "list") return <CardHorizontal {...props} />;

  return <CardVertical {...props} />;
};

export default BotCard;
