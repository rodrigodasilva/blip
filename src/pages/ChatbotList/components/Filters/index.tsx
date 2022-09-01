import iconOrganizeBlocks from "@/assets/icons/icon-organize-blocks.png";
import iconOrganizeList from "@/assets/icons/icon-organize-list.png";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton  ";
import Input from "@/components/Input";
import useView from "@/hooks/useView";

import { Filter } from "../..";
import * as S from "./styles";

export interface FilterChangeEvent {
  name: string;
  value: string | number;
}

interface FiltersProps {
  filters: Filter;
  onFilterChange: ({ name, value }: FilterChangeEvent) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ name, value });
  };

  const { view, onViewChange } = useView();

  return (
    <S.FiltersWrapper aria-label="Filter">
      <Input
        placeholder="Search"
        aria-label="name"
        name="search"
        onChange={handleInputChange}
      />
      <Button
        active={filters.orderBy === "name"}
        onClick={() => onFilterChange({ name: "orderBy", value: "name" })}
      >
        Order by name
      </Button>
      <Button
        active={filters.orderBy === "created"}
        onClick={() => onFilterChange({ name: "orderBy", value: "created" })}
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
