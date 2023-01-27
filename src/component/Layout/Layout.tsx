import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarHeader from "@/component/MainHeader";
import styles from "@/styles/Home.module.css";

export const siteTitle = "Любимчик";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: ILayout) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <NavbarHeader />
      </header>
      <main className={styles.main}>
        <Container fluid>{children}</Container>
      </main>
      <footer>
        <Container fluid>
          <Row>Рыбинск</Row>
        </Container>
      </footer>
    </>
  );
}
export default Layout;
