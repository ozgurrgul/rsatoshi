import type { Direction, WhaleTradeSide } from "./models";
import { green, red, grey } from "@ant-design/colors";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const DirectionColors: {
  [key in Direction]: string;
} = {
  up: String(green[5]),
  down: String(red[5]),
};

export const BuySellColors: {
  [key in WhaleTradeSide]: string;
} = {
  buy: String(green[4]),
  sell: String(red[4]),
  unknown: String(grey[5]),
};
