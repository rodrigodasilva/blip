import Spinner from "@/components/Spinner";

import BotCard from "../BotCard";
import CardListWrapper from "../CardListWrapper";
import Message from "../Message";

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
      <CardListWrapper>
        {bots.map(bot => (
          <li key={bot.name} className="grid-item">
            <BotCard bot={bot} />
          </li>
        ))}
      </CardListWrapper>
    </section>
  );
};

export default Chatbots;
