import iconOrganizeBlocks from "@/assets/icons/icon-organize-blocks.svg";
import iconOrganizeList from "@/assets/icons/icon-organize-list.svg";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton  ";
import Input from "@/components/Input";

import * as S from "./styles";

const Filters: React.FC = () => {
  return (
    <S.FiltersWrapper>
      <Input
        placeholder="Search"
        aria-label="name"
        onChange={e => console.log(e.target.value)}
      />
      <Button>Order by name</Button>
      <Button>Order by creation</Button>
      <IconButton
        variant="text"
        color="neutral"
        aria-label="Organize itens in blocks"
      >
        <img src={iconOrganizeBlocks} alt="Icon organize blocks" />
      </IconButton>
      <IconButton
        variant="text"
        color="neutral"
        aria-label="Organize itens in list"
      >
        <img src={iconOrganizeList} alt="Icon organize list" />
      </IconButton>
    </S.FiltersWrapper>
  );
};

export default Filters;
