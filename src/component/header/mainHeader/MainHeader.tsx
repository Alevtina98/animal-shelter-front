import React, { FC, memo, useState } from "react";
import { Button, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaVk } from "react-icons/fa";
import styles from "@/component/header/mainHeader/MainHeader.module.css";
import { useRouter } from "next/router";

// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

// Группа ВКонтакте
//https://vk.com/lubimchik76?ysclid=ld9dg7m7ad739621248
const MainHeader: FC = () => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  return (
    <Navbar
      bg="light"
      fixed="top"
      expand="sm"
      collapseOnSelect
      sticky="top"
      className={styles.mainHeader}
    >
      <Container>
        <Navbar.Brand href="/team">
          {/*  <img
            alt=""
            // src="/icon/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />*/}
          Любимчик
          {/* <span className="fs-6  text-secondary">
            {" "}
            Помощь бездомным животным
          </span>*/}
        </Navbar.Brand>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav activeKey={router.pathname} className="me-auto">
            <Nav.Link href="/team">Наша команда</Nav.Link>
            <Nav.Link href="/animals">Подопечные</Nav.Link>

            {/* волонтеры и их истории/СМИ
            <Nav.Link href="/team">Команда</Nav.Link>*/}
            {/*   кураторство/уборка/водитель/посылки/пожертвования
            <Nav.Link href="/help">Помощь</Nav.Link>*/}
            {/*на улице/на лечении/на пристрое/дома - для всех форм фильтр*/}

            {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Группа{" "}
            <a href="https://vk.com/lubimchik76?ysclid=ld9dg7m7ad739621248">
              ВКонтакте
            </a>
          </Navbar.Text>
        </Navbar.Collapse>*/}
          </Nav>
          {/*
          <Navbar.Collapse className="justify-content-end">

            <Nav>
              <Nav.Link href="/login">Регистрация </Nav.Link>
              <Nav.Link href="/login">Вход </Nav.Link>
            </Nav>
          </Navbar.Collapse>*/}
          <Form className="d-flex">
            <Button variant="danger" href="/help">
              Помочь
            </Button>
          </Form>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default memo(MainHeader);
