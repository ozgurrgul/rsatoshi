import Head from "next/head";
import {
  getAllWhaleTrades,
  getBiggestWhaleTrades,
  getExchangesCms,
  getWhaleTradesStats,
  getWhaleTrends,
} from "../api";
import { TradesTable } from "../components/TradesTable";
import { CardWindow } from "../components/CardWindow";
import { WhaleBuyPressure } from "../components/WhaleBuyPressure";
import { WhalePieChart } from "../components/WhalePieChart";
import { mapTradeCmsDataBySlug } from "../mapper/mapTradeCmsDataBySlug";
import { moneyFormatter } from "../utils/moneyFormatter";

export type MainProps = {
  allWhaleTrades: Awaited<ReturnType<typeof getAllWhaleTrades>>;
  biggestWhaleTrades: Awaited<ReturnType<typeof getBiggestWhaleTrades>>;
  whaleTrends: Awaited<ReturnType<typeof getWhaleTrends>>;
  whaleStats: Awaited<ReturnType<typeof getWhaleTradesStats>>;
};

export default function Home({
  allWhaleTrades,
  biggestWhaleTrades,
  whaleTrends,
  whaleStats,
}: MainProps) {
  return (
    <>
      <Head>
        <title>rsatoshi</title>
        <meta
          name="description"
          content="rsatoshi - track whale trades and crypto currencies markets information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="windows">
        <CardWindow title="Latest whale trades">
          <TradesTable trades={allWhaleTrades} />
        </CardWindow>
        <CardWindow title="Biggest whale trades">
          <TradesTable trades={biggestWhaleTrades} />
        </CardWindow>
        <CardWindow title="Whale buy pressure">
          <WhaleBuyPressure trends={whaleTrends} />
        </CardWindow>
        <CardWindow title="Exchanges by whale trade volume">
          <WhalePieChart
            subtext={`Based on last ${whaleStats.byVolume.exchangesDataSetLength} whale trades`}
            tooltipFormatter={moneyFormatter}
            exchanges={whaleStats.byVolume.exchanges}
          />
        </CardWindow>
        <CardWindow title="Exchanges by whale trade count">
          <WhalePieChart
            subtext={`Based on last ${whaleStats.byVolume.exchangesDataSetLength} whale trades`}
            tooltipFormatter={(e: any) => e}
            exchanges={whaleStats.byCount.exchanges}
          />
        </CardWindow>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const [
    allWhaleTrades,
    biggestWhaleTrades,
    whaleTrends,
    whaleStats,
    exchangesCms,
  ] = await Promise.all([
    getAllWhaleTrades(),
    getBiggestWhaleTrades(),
    getWhaleTrends(),
    getWhaleTradesStats(),
    getExchangesCms(),
  ]);

  return {
    props: {
      allWhaleTrades: allWhaleTrades.map((t) =>
        mapTradeCmsDataBySlug(exchangesCms, t)
      ),
      biggestWhaleTrades: biggestWhaleTrades.map((t) =>
        mapTradeCmsDataBySlug(exchangesCms, t)
      ),
      whaleTrends,
      whaleStats,
    },
  };
}
