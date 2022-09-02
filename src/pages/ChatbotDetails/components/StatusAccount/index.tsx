import iconBallon from "@/assets/ballon.png";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

import * as S from "./styles";

const StatusAccount: React.FC = () => {
  return (
    <S.StatusAccountWrapper>
      <img src={iconBallon} alt="Icon ballon" />

      <Typography variant="body-normal" color="neutral-cloud">
        Status account
      </Typography>
      <Typography variant="h2-bold">Free</Typography>
      <Button>Update account</Button>
    </S.StatusAccountWrapper>
  );
};

export default StatusAccount;
