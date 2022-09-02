import parseShortName from "./parseShortName";

describe("parseShortName", () => {
  it("should parse a fullname to shortname", () => {
    const result = parseShortName("Rodrigo Ribeiro");

    expect(result).toBe("rodrigo_ribeiro");
  });

  it("should parse a fullname with a special character", () => {
    const result = parseShortName("João da Silva");

    expect(result).toBe("joao_da_silva");
  });
});
