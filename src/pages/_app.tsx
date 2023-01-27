import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { memo, useEffect } from "react";
import Layout from "@/component/Layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  const renderWithLayout =
    Component.getLayout ||
    function (page: any) {
      return <Layout>{page}</Layout>;
    };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return renderWithLayout(<Component {...pageProps} />);
};
export default memo(App);
