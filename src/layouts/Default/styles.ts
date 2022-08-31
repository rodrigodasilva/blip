import styled from "styled-components";

export const DefaultLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const DefaultLayoutContent = styled.main`
  background-color: var(--primary-ghost);
  height: 100%;
  padding: 40px 60px;
  overflow-y: auto;
`;
