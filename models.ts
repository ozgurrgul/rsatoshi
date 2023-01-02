export type Direction = "up" | "down";
export type WhaleTradeSide = "buy" | "sell" | "unknown";

export type WhaleTrade = {
  id: number;
  exchange_id: number;
  pair_id: number;
  price: string;
  amount: string;
  total: string;
  created_at: string;
  side: WhaleTradeSide;
  computedTradingPairUrl?: string;
};

export type WhaleTradeWithPairDetail = WhaleTrade & {
  pair: string;
  exchange_slug: string;
  base_currency_slug: string;
  base_currency_symbol: string;
  quote_currency_slug: string;
  quote_currency_symbol: string;
};

export type WhaleTrackedExchangePair = {
  pair_id: number;
  exchange_id: number;
  pair: string;
  exchange_slug: string;
};

type WhaleConfig = {
  min: number;
  whaleTrackedExchangePairs: WhaleTrackedExchangePair;
  trackedExchanges: string[];
};

export type SiteData = {
  whaleConfig: WhaleConfig;
};

export type WhaleTradesPageData = {
  whaleTrades: WhaleTradeWithPairDetail[];
  whaleTradePairs: string[];
};

export type WhaleTrends = {
  buyPressure: number;
  buyPressureDataSetLength: number;
};

export type WhaleTradesStatsResponse = {
  byVolume: WhaleTradesGroupedByExchange;
  byCount: WhaleTradesGroupedByExchange;
};

export type WhaleTradesGroupedByExchange = {
  exchanges: { name: string; value: any }[];
  exchangesDataSetLength: number;
};

export type TradingPairUrl = {
  urlPlaceHolder: string;
};

export type EntityWebsite = {
  name: string | number;
  href?: string;
};

export type ExchangeCmsData = {
  id: string;
  name: string;
  tradingPairUrl: TradingPairUrl[];
  mainWebsite?: EntityWebsite;
  otherWebsites: EntityWebsite[];
  desc: any /** document from keystone */;
};
