import styled from "styled-components";

export const ChatbotDetailsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ChatbotDetailsHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChatbotDetailsBody = styled.section`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  margin-top: 24px;
  margin-bottom: 44px;

  .grid-item {
    width: 100%;
  }
  .grid-item--1 {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  .grid-item--2 {
    grid-column: 3 / span 4;
    grid-row: 1;
  }
  .grid-item--3 {
    grid-column: 1 / span 3;
    grid-row: 2;
  }
  .grid-item--4 {
    grid-column: 4 / span 3;
    grid-row: 2;
  }
  .grid-item--5 {
    grid-column: 7 / span 2;
    grid-row: 1 / span 2;
  }

  @media (max-width: 800px) {
    .grid-item--1 {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
    .grid-item--2 {
      grid-column: 5 / span 4;
      grid-row: 1;
    }
    .grid-item--3 {
      grid-column: 1 / span 4;
      grid-row: 2;
    }
    .grid-item--4 {
      grid-column: 5 / span 4;
      grid-row: 2;
    }
    .grid-item--5 {
      grid-column: 3 / span 4;
      grid-row: 3;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--neutral-city);
`;

export const ChatbotDetailsFooter = styled.footer`
  margin: 16px;
  text-align: center;
`;
