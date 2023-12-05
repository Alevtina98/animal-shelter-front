import React, { FC, memo, useState } from "react";
import {Button, Container, Form, Nav, Offcanvas} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import appStyles from "@/component/app/appHeader/AppHeader.module.css";
import styles from "./AppHeader.module.css";
import { useRouter } from "next/router";
import clsx from "clsx";

// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

// Группа ВКонтакте
//https://vk.com/lubimchik76?ysclid=ld9dg7m7ad739621248

const NAVBAR_KEY = "offcanvasNavbar-expand-sm";
const NAVBAR_LABEL_KEY = "offcanvasNavbarLabel-expand-sm";

const AppHeader: FC = () => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  return (
    <Navbar
      bg="light"
      fixed="top"
      key={"sm"}
      expand="sm"
      collapseOnSelect
      sticky="top"
      className={clsx(appStyles.mainHeader)}
    >
      <Container fluid>
        <Navbar.Brand href="/">
            <img
            alt=""
           src="/icon/logo.png"
            width="70"
            height="50"
            className="d-inline-block align-top"
          />
         
          {/* <span className="fs-6  text-secondary">
            {" "}
            Помощь бездомным животным
          </span>*/}
        </Navbar.Brand>


          <Navbar.Toggle aria-controls={NAVBAR_KEY} />
          <Navbar.Offcanvas
              id={NAVBAR_KEY}
              aria-labelledby={NAVBAR_LABEL_KEY}
              placement="end"
          >
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={NAVBAR_LABEL_KEY}>
                     Любимчик
                  </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <Nav activeKey={router.pathname} className="me-auto">
                   <Nav.Link href="/team">Наша команда</Nav.Link>
                   <Nav.Link href="/animals">Подопечные</Nav.Link>
                   <Nav.Link href="/help">Помощь</Nav.Link>

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

              </Offcanvas.Body>

          </Navbar.Offcanvas>
          <Form className={clsx("d-flex",styles.collapseElement)}>
              <Button variant="danger" href="/help">
                  Пожертвовать
              </Button>
          </Form>

         {/* <Form className="d-flex">
              <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
          </Form>*/}


          {/*
          <Navbar.Collapse className="justify-content-end">

            <Nav>
              <Nav.Link href="/login">Регистрация </Nav.Link>
              <Nav.Link href="/login">Вход </Nav.Link>
            </Nav>
          </Navbar.Collapse>*/}


       

         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
      </Container>
    </Navbar>
  );
};

export default memo(AppHeader);
