import styled from "styled-components";

export const AvatarWrapper = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  color: var(--primary-ghost);
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  overflow: hidden;

  &.avatar--small {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }

  &.avatar--medium {
    width: 56px;
    height: 56px;
    font-size: 16px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000;
`;
