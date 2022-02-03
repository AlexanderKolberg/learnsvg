import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>LearnSVG</title>
      <meta name="description" content="Learn SVG interactivity" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
