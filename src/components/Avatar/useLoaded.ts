import React from "react";

type LoadedProps = "loading" | "idle" | "error";

const useLoaded = ({ src = "" }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = React.useState<LoadedProps>("loading");

  React.useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded("loading");

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("idle");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
};

export default useLoaded;
