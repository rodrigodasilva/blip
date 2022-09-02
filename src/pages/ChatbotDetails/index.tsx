import { useParams } from "react-router-dom";

import iconDefaultBotAvatar from "@/assets/icons/icon-default-avatar.png";
import iconMessageReceived from "@/assets/icons/icon-message-received.png";
import iconMessageSent from "@/assets/icons/icon-message-sent.png";
import iconUserActive from "@/assets/icons/icon-user-active.png";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import Spinner from "@/components/Spinner";
import Typography from "@/components/Typography";
import useFetch from "@/hooks/useFetch";

import StatusAccount from "./components/StatusAccount";
import * as S from "./styles";

interface Bot {
  name: string;
  shortName: string;
  description: string;
  image?: string;
  created: string;
  culture: string;
  analytics: {
    message: {
      received: number;
      sent: number;
    };
    user: {
      actived: number;
    };
  };
}

const ChatbotDetails: React.FC = () => {
  const { short_name } = useParams();

  const {
    data: bot,
    loading,
    error,
  } = useFetch<Bot>(
    `https://front-end-test.beta-cs.blip.ai/${short_name}/details`
  );

  if (loading) {
    return (
      <S.Message>
        <Spinner />
      </S.Message>
    );
  }

  if (error) {
    return <S.Message>There was an error loading the bot</S.Message>;
  }

  if (!bot) {
    return <S.Message>No bots found</S.Message>;
  }

  const formattedDate = new Date(bot?.created).toLocaleString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <>
      <S.ChatbotDetailsHeader>
        <S.ChatbotDetailsHeaderLeft>
          <Avatar src={iconDefaultBotAvatar} alt="Avatar bot" />
          <div>
            <Typography variant="h2-bold">{bot?.name}</Typography>
            <Typography variant="subtitle1-normal" color="neutral-cloud">
              {bot.shortName}
            </Typography>
          </div>
        </S.ChatbotDetailsHeaderLeft>
        <Typography variant="subtitle1-normal" color="neutral-cloud">
          Created at {formattedDate}
        </Typography>
      </S.ChatbotDetailsHeader>
      <Divider />
      <S.ChatbotDetailsBody>
        <div className="grid-item grid-item--1">
          <Card height="200px" className="flex flex-col">
            <Typography variant="subtitle2-normal" className="mb-8">
              Region and idiom
            </Typography>
            <Typography variant="subtitle2-bold" className="mb-16">
              {bot.culture}
            </Typography>
            <Typography variant="subtitle2-normal" className="mb-8">
              Timezone
            </Typography>
            <Typography variant="subtitle2-bold">
              (UTC - 03:00) Brasília
            </Typography>
          </Card>
        </div>
        <div className="grid-item grid-item--2">
          <Card height="200px" className="flex items-center">
            <Avatar
              className="mr-8"
              src={iconUserActive}
              alt="Avatar received messages"
            />
            <div className="flex flex-col justify-center">
              <Typography variant="h2-bold">
                {bot.analytics.user.actived}
              </Typography>
              <Typography variant="subtitle1-normal">Active users</Typography>
            </div>
          </Card>
        </div>
        <div className="grid-item grid-item--3">
          <Card height="200px" className="flex items-center">
            <Avatar
              className="mr-8"
              src={iconMessageReceived}
              alt="Avatar sent messages"
            />
            <div className="flex flex-col justify-center">
              <Typography variant="h2-bold">
                {bot.analytics.message.received}
              </Typography>
              <Typography variant="subtitle1-normal">
                Received messages
              </Typography>
            </div>
          </Card>
        </div>
        <div className="grid-item grid-item--4">
          <Card height="200px" className="flex items-center">
            <Avatar className="mr-8" src={iconMessageSent} width={10} />
            <div className="flex flex-col justify-center">
              <Typography variant="h2-bold">
                {bot.analytics.message.sent}
              </Typography>
              <Typography variant="subtitle1-normal">Sent messages</Typography>
            </div>
          </Card>
        </div>
        <div className="grid-item grid-item--5 self-center">
          <StatusAccount />
        </div>
      </S.ChatbotDetailsBody>
      <Divider className="" />
      <S.ChatbotDetailsFooter>
        <Typography variant="subtitle1-normal">
          ©2022, BLiP All rights reserved | Terms of use
        </Typography>
      </S.ChatbotDetailsFooter>
    </>
  );
};

export default ChatbotDetails;
