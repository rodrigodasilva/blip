import Spinner from "@/components/Spinner";

import BotCard from "../BotCard";
import Message from "../Message";
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
      <Message>
        <Spinner />
      </Message>
    );
  }

  if (error) {
    return <Message>There was an error loading the bots</Message>;
  }

  if (!bots?.length) {
    return <Message>No bots found</Message>;
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
