import React from "react";

import * as S from "./styles";

type Variants = "h1-normal" | "h1-bold" | "h1-extra";

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  as?: React.ElementType;
  color?: string;
  className?: string;
  children: React.ReactNode;
  noWrap?: boolean;
  style?: React.CSSProperties;
  variant?: Variants;
}

export const variantMapping = {
  "h1-extra": "h1",
  "h1-bold": "h1",
  "h1-normal": "h1",
};

const Typography: React.FC<TypographyProps> = ({
  align = "left",
  as: asProp = "h1",
  color = "neutral-city",
  className = "",
  children,
  noWrap = false,
  style = {},
  variant = "h1-normal",
  ...props
}) => {
  const asComponent = asProp || variantMapping[variant];

  const customStyle = {
    ...(align !== "inherit" && {
      textAlign: align,
    }),
    ...(color && {
      color: `var(--${color})`,
    }),
    ...(noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "block",
    }),
    ...style,
  };

  return (
    <S.TypographyWrapper
      as={asComponent}
      className={`${variant} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </S.TypographyWrapper>
  );
};

export default Typography;
