import { API_URL } from "./constants";
import type {
  ExchangeCmsData,
  WhaleTradesStatsResponse,
  WhaleTradeWithPairDetail,
  WhaleTrends,
} from "./models";

export async function json(p: Promise<Response>) {
  return await (await p).json();
}

export async function getAllWhaleTrades(): Promise<WhaleTradeWithPairDetail[]> {
  return json(fetch(`${API_URL}/whale-trades/latest`));
}

export async function getBiggestWhaleTrades(): Promise<
  WhaleTradeWithPairDetail[]
> {
  return json(fetch(`${API_URL}/whale-trades/biggest`));
}

export async function getWhaleTrends(): Promise<WhaleTrends> {
  return json(fetch(`${API_URL}/whale-trades/trend`));
}

export async function getWhaleTradesStats(): Promise<WhaleTradesStatsResponse> {
  return json(fetch(`${API_URL}/whale-trades/stats`));
}

export async function getExchangesCms(): Promise<{
  [slug: string]: ExchangeCmsData;
}> {
  return json(fetch(`${API_URL}/exchanges-cms`));
}
