const parseShortName = (name: string): string => {
  if (!name) return "";

  const nameNormalized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  return nameNormalized.replace(/ /g, "_").toLocaleLowerCase();
};

export default parseShortName;
