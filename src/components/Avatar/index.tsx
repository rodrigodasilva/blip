import cc from "classnames";
import React from "react";

import * as S from "./styles";
import useLoaded from "./useLoaded";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "small" | "medium";
}

const colors = [
  "var(--primary-main-blip)",
  "var(--secondary-true)",
  "var(--extended-smurf)",
  "var(--extended-petroleum)",
  "var(--extended-carrot)",
  "var(--extended-watermelon)",
  "var(--extended-melon)",
  "var(--extended-grape)",
  "var(--extended-sea)",
];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Avatar: React.FC<AvatarProps> = ({
  src = "",
  alt = "",
  size = "medium",
  className,
  ...props
}) => {
  let children = null;

  const loaded = useLoaded({ src });

  if (src && loaded !== "error") {
    children = <S.AvatarImage alt={alt} src={src} />;
  } else if (alt) {
    [children] = alt;
  }

  const backgroundColor = getRandomColor();

  return (
    <S.AvatarWrapper
      style={{ backgroundColor }}
      className={cc(`avatar--${size}`, className)}
      {...props}
    >
      {children}
    </S.AvatarWrapper>
  );
};

export default Avatar;
