import styled from "styled-components";

export const TypographyWrapper = styled.div.attrs<{ as: string }>(props => ({
  as: props.as,
}))`
  &.h1-normal {
    font-size: 40px;
    font-weight: normal;
  }

  &.h1-bold {
    font-size: 40px;
    font-weight: 700;
  }

  &.h1-extra {
    font-size: 40px;
    font-weight: 800;
  }
`;
