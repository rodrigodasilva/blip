import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  width: 188px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardAction = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 12px;
  left: 12px;

  img {
    width: 23px;
  }
`;

export const CardImage = styled.img`
  margin-bottom: 16px;
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
`;

export const CardDescription = styled.p`
  color: var(--neutral-rooftop);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
`;
