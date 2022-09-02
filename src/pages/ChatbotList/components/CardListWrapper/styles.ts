import styled from "styled-components";

export const CardGridWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0;

  .grid-item {
    width: auto;
    min-width: 220px;
    list-style: none;

    @media (max-width: 600px) {
      width: 100%;
      min-width: 100%;
    }
  }

  &.card-grid--list .grid-item {
    width: 100%;
  }
`;
