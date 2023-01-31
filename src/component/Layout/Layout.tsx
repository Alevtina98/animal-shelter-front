import Head from "next/head";
import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarHeader from "@/component/MainHeader";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";

export const siteTitle = "Любимчик";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: ILayout) {
  return (
    <div className="w-100 h-100 position-fixed d-flex mh-100 flex-column">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <NavbarHeader />
      </header>
      <div className={clsx("overflow-auto flex-fill", styles.mainContainer)}>
        <main className={styles.main}>
          <Container fluid>{children}</Container>
        </main>
      </div>

      <footer>
        <Container fluid>
          <Row>Рыбинск</Row>
        </Container>
      </footer>
    </div>
  );
}
export default Layout;
