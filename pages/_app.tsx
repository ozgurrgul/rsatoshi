import "../styles/globals.css";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";
import type { ThemeConfig } from "antd/es/config-provider/context";

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: "#f4d573",
    colorTextLightSolid: "black",
  },
  components: {
    Button: {
      borderRadius: 0,
    },
    Table: {
      borderRadiusLG: 0,
    },
    Tooltip: {
      borderRadius: 0,
      colorTextLightSolid: "#f4d573",
    },
    Card: {
      borderRadiusLG: 0,
    },
    Descriptions: {
      borderRadiusLG: 0,
    },
    Input: {
      borderRadius: 0,
    },
    Select: {
      borderRadius: 0,
    },
    Alert: {
      borderRadiusLG: 0,
    },
  },
  algorithm: theme.darkAlgorithm,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        ...customTheme,
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
