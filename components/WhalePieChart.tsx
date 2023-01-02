import ReactECharts from "echarts-for-react";
import { WhaleTradesGroupedByExchange } from "../models";

export const WhalePieChart: React.FC<{
  exchanges: WhaleTradesGroupedByExchange["exchanges"];
  subtext: string;
  tooltipFormatter: any;
}> = ({ exchanges, subtext, tooltipFormatter }) => {
  const options = {
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return `<strong>${params.name}</strong>: ${tooltipFormatter(
          params.data.value
        )} (${params.percent}%)<br />`;
      },
    },
    title: {
      left: "center",
      subtext,
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
          },
        },
        labelLine: {
          show: false,
        },
        data: exchanges || [],
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 500 }} />;
};
