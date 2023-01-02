import ReactECharts from "echarts-for-react";
import { MainProps } from "../pages";

export const WhaleBuyPressure: React.FC<{
  trends: MainProps["whaleTrends"];
}> = ({ trends }) => {
  const options = {
    title: {
      subtext: `Based on last ${trends.buyPressureDataSetLength} whale trades`,
      left: "center",
    },
    series: [
      {
        type: "gauge",
        progress: {
          show: true,
          width: 18,
        },
        axisLine: {
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: "#f4d573",
          },
        },
        axisLabel: {
          distance: 25,
          color: "#f4d573",
          fontSize: 20,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 30,
          offsetCenter: [0, "70%"],
        },
        data: [
          {
            value: +trends.buyPressure?.toFixed(2),
          },
        ],
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 500 }} />;
};
