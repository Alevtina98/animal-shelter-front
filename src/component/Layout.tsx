import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import clsx from "clsx";

import AppTab from "@/component/app/AppTab";
import AppHeader from "@/component/app/appHeader/AppHeader";
import AppFooter from "@/component/app/appFooter/AppFooter";

import styles from "@/styles/Home.module.css";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: ILayout) {
  return (
    <div className="w-100 h-100 position-fixed d-flex mh-100 flex-column">
      <Head>
        <AppTab />
      </Head>
      <header>
        <AppHeader />
      </header>
      <main className={clsx("flex-fill", styles.mainContainer)}>
        <Container className={clsx("flex-fill", styles.main)}>
          {children}
        </Container>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}
export default Layout;
