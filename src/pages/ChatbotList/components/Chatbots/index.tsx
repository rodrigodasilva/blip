import Spinner from "@/components/Spinner";

import BotCard from "../BotCard";
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
          <BotCard key={bot.name} bot={bot} />
        ))}
      </S.ChatbotsList>
    </section>
  );
};

export default Chatbots;
