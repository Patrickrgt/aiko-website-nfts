export const OPENSEA = "https://opensea.io/";
export const SECONDS_PADDING = 13;

interface GlobalsType {
  AIKO: string;
  SALE_START: number;
}

export const ETH_GLOBALS: GlobalsType = {
  AIKO: "0xb661AB9BCd2878C5F8C136f67fd550a9D7dF7197",
  SALE_START: 1656169200000 + SECONDS_PADDING * 1000,
};

export const RINKEBY_GLOBALS: GlobalsType = {
  AIKO: "0xD010802fAbE29FEd5EA340306e1F92fF46A7Ad21",
  SALE_START: 1656156910000 + SECONDS_PADDING * 1000,
};
