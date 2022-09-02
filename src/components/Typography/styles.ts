import styled from "styled-components";

export const TypographyWrapper = styled.div.attrs<{ as: string }>(props => ({
  as: props.as,
}))`
  &.h1-normal {
    font-size: 32px;
    font-weight: normal;
    line-height: 36px;
  }

  &.h1-bold {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
  }

  &.h1-extra {
    font-size: 32px;
    font-weight: 800;
    line-height: 36px;
  }

  &.h2-bold {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }

  &.subtitle1-normal {
    font-size: 14px;
    font-weight: normal;
  }

  &.subtitle1-bold {
    font-size: 14px;
    font-weight: 700;
  }

  &.subtitle2-normal {
    font-size: 12px;
    font-weight: normal;
  }

  &.subtitle2-bold {
    font-size: 12px;
    font-weight: 700;
  }

  &.body-normal {
    font-size: 16px;
    font-weight: normal;
  }
`;
