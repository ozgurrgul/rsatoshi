import { TableColumnsType, Space, Typography, Tag, Table } from "antd";
import { BuySellColors } from "../constants";
import { WhaleTradeWithPairDetail } from "../models";
import { MainProps } from "../pages";
import { cryptoFormatter } from "../utils/cryptoFormatter";
import { removeDollarSign, moneyFormatter } from "../utils/moneyFormatter";
import { FormattedDate } from "./FormattedDate";

const columns: TableColumnsType<WhaleTradeWithPairDetail> = [
  {
    title: "Exchange",
    render: (row: WhaleTradeWithPairDetail) => (
      <Space>{row.exchange_slug}</Space>
    ),
  },
  {
    title: "Date",
    render: (row: WhaleTradeWithPairDetail) => (
      <Typography.Text style={{ whiteSpace: "nowrap" }}>
        <FormattedDate date={row.created_at} />
      </Typography.Text>
    ),
  },
  {
    title: "Pair",
    render: (row: WhaleTradeWithPairDetail) => (
      <Typography.Text style={{ whiteSpace: "nowrap" }}>
        {row.computedTradingPairUrl ? (
          <a
            href={row.computedTradingPairUrl}
            style={{ whiteSpace: "nowrap" }}
            target={"_blank"}
            rel="noreferrer"
          >
            <Typography.Text>
              <Typography.Text underline>{row.pair}</Typography.Text>{" "}
            </Typography.Text>
          </a>
        ) : (
          <Typography.Text>{row.pair}</Typography.Text>
        )}
      </Typography.Text>
    ),
  },
  {
    title: "Amount",
    render: (row: WhaleTradeWithPairDetail) => (
      <Typography.Text style={{ whiteSpace: "nowrap" }}>
        <Typography.Text>{cryptoFormatter(row.amount)}</Typography.Text>{" "}
        <Typography.Text type="secondary">
          {row.base_currency_symbol}
        </Typography.Text>
      </Typography.Text>
    ),
  },
  {
    title: "Side",
    render: (row: WhaleTradeWithPairDetail) => (
      <Tag color={BuySellColors[row.side]}>
        <Typography.Text
          style={{ whiteSpace: "nowrap", color: "black", fontSize: 12 }}
        >
          {row.side}
        </Typography.Text>
      </Tag>
    ),
  },
  {
    title: "Price",
    render: (row: WhaleTradeWithPairDetail) => (
      <span>
        <Typography.Text style={{ whiteSpace: "nowrap" }}>
          {removeDollarSign(moneyFormatter(row.price))}{" "}
          <Typography.Text type="secondary">
            {row.quote_currency_symbol}
          </Typography.Text>
        </Typography.Text>
      </span>
    ),
  },
  {
    title: "Total",
    render: (row: WhaleTradeWithPairDetail) => (
      <span>
        <Typography.Text style={{ whiteSpace: "nowrap" }}>
          {removeDollarSign(moneyFormatter(row.total))}{" "}
          <Typography.Text type="secondary">
            {row.quote_currency_symbol}
          </Typography.Text>
        </Typography.Text>
      </span>
    ),
  },
];

export const TradesTable: React.FC<{
  trades: MainProps["allWhaleTrades"];
}> = ({ trades }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table
        dataSource={trades || []}
        columns={columns}
        rowKey="id"
        pagination={{ position: ["bottomCenter"], showSizeChanger: false }}
        size="small"
      />
    </div>
  );
};
