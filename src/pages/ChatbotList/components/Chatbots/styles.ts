import styled from "styled-components";

export const ChatbotsList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 0;
`;

export const ChabotsListMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--neutral-city);
`;
