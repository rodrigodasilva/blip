import * as S from "./styles";

type MessageProps = { children: React.ReactNode };

const Message: React.FC<MessageProps> = ({ children }) => {
  return <S.MessageWrapper>{children}</S.MessageWrapper>;
};

export default Message;
