import Card, {
  CardAction,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/Card";
import Spinner from "@/components/Spinner";

import * as S from "./styles";

interface Bot {
  name: string;
  type: string;
  image?: string;
  created: string;
}

interface ChatbotsProps {
  bots: Bot[] | undefined;
  loading: boolean;
  error: boolean;
}

const Chatbots: React.FC<ChatbotsProps> = ({ bots, loading, error }) => {
  if (loading) {
    return (
      <S.ChabotsListMessage>
        <Spinner />
      </S.ChabotsListMessage>
    );
  }

  if (error) {
    return (
      <S.ChabotsListMessage>
        There was an error loading the bots
      </S.ChabotsListMessage>
    );
  }

  if (!bots?.length) {
    return <S.ChabotsListMessage>No bots found</S.ChabotsListMessage>;
  }

  return (
    <section aria-label="Chatbots">
      <S.ChatbotsList>
        {bots.map(bot => (
          <li key={bot.name}>
            <Card>
              <CardAction />
              <CardImage src={bot.image} alt={bot.name} />
              <CardTitle>{bot.name}</CardTitle>
              <CardDescription>{bot.type}</CardDescription>
            </Card>
          </li>
        ))}
      </S.ChatbotsList>
    </section>
  );
};

export default Chatbots;
