import iconOrganizeBlocks from "@/assets/icons/icon-organize-blocks.png";
import iconOrganizeList from "@/assets/icons/icon-organize-list.png";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton  ";
import Input from "@/components/Input";
import useFilters from "@/hooks/useFilters";
import useView from "@/hooks/useView";

import * as S from "./styles";

const Filters: React.FC = () => {
  const { view, onViewChange } = useView();

  const { filters, onNameChange, onOrderByChange } = useFilters();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

  const handleOrderByChange = (value: string) => {
    onOrderByChange(value);
  };

  return (
    <S.FiltersWrapper aria-label="Filter">
      <Input
        value={filters.name}
        placeholder="Search"
        aria-label="name"
        onChange={handleNameChange}
      />
      <Button
        active={filters?.orderBy === "name"}
        onClick={() => handleOrderByChange("name")}
      >
        Order by name
      </Button>
      <Button
        active={filters.orderBy === "created"}
        onClick={() => handleOrderByChange("created")}
      >
        Order by creation
      </Button>
      <IconButton
        active={view === "block"}
        variant="text"
        color="neutral"
        aria-label="Organize itens in blocks"
        onClick={() => onViewChange("block")}
      >
        <img src={iconOrganizeBlocks} alt="Icon organize blocks" />
      </IconButton>
      <IconButton
        active={view === "list"}
        variant="text"
        color="neutral"
        aria-label="Organize itens in list"
        onClick={() => onViewChange("list")}
      >
        <img src={iconOrganizeList} alt="Icon organize list" />
      </IconButton>
    </S.FiltersWrapper>
  );
};

export default Filters;
