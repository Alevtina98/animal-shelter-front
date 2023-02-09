import Head from "next/head";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import NavbarHeader from "@/component/header/mainHeader/MainHeader";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";
import { FaVk } from "react-icons/fa";

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
          <Button variant="icon" href="https://vk.com/lubimchik76">
            <FaVk color="white" size="40"></FaVk>
          </Button>
          <div className="d-flex ">
            ЛЮБИМЧИК Помощь бездомным животным Рыбинск
          </div>
        </Container>
      </footer>
    </div>
  );
}
export default Layout;
