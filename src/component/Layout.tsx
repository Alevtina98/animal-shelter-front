import Head from "next/head";
import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarHeader from "@/component/header/mainHeader/MainHeader";
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
      <main className={clsx("flex-fill", styles.mainContainer)}>
        <Container className={clsx("flex-fill", styles.main)}>
          {children}
        </Container>
      </main>
      <footer>
        <Container fluid className={styles.footer}>
          <Row>ЛЮБИМЧИК Помощь бездомным животным Рыбинск</Row>
        </Container>
      </footer>
    </div>
  );
}
export default Layout;
