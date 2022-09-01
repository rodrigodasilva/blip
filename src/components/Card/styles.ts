import styled from "styled-components";

import Avatar from "@/components/Avatar";

export const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  display: flex;
  position: relative;
  align-items: center;
  list-style: none;

  &.card--vertical {
    width: 188px;
    height: 192px;
    flex-direction: column;
    justify-content: center;
  }

  &.card--horizontal {
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 16px 24px;
    width: 100%;
  }
`;

export const CardOverlay = styled.div.attrs<{ as: string }>(props => ({
  as: props.as,
}))`
  list-style: none;
  position: relative;

  &.card__orverlay--horizontal {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    list-style: none;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardAction = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  z-index: 2;

  img {
    width: 23px;
  }

  &.card__action--absolute {
    position: absolute;
    top: 12px;
    left: 12px;
  }

  &.card__action--relative {
    position: relative;
  }
`;

export const CardImage = styled(Avatar)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const CardTitle = styled.h4`
  color: var(--neutral-city);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  word-break: break-word;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  color: var(--neutral-rooftop);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  word-break: break-word;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
