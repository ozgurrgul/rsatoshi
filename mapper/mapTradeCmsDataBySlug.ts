import { getExchangesCms } from "../api";
import { WhaleTradeWithPairDetail } from "../models";

export function mapTradeCmsDataBySlug(
  exchangesCms: Awaited<ReturnType<typeof getExchangesCms>>,
  trade: WhaleTradeWithPairDetail
) {
  const cmsData = exchangesCms && exchangesCms[trade.exchange_slug];
  if (cmsData && cmsData.name) {
    trade.exchange_slug = cmsData.name;
  }

  if (cmsData && cmsData.tradingPairUrl) {
    const urlPlaceHolder = cmsData.tradingPairUrl[0]?.urlPlaceHolder;
    if (urlPlaceHolder) {
      trade.computedTradingPairUrl = urlPlaceHolder
        ?.replace("$bcs", trade.base_currency_symbol)
        .replace("$qcs", trade.quote_currency_symbol);
    }
  }

  return trade;
}
