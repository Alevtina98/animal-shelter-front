import { FC, memo } from "react";
import { Button, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym
const MainHeader: FC = () => {
  return (
    <Navbar bg="light" fixed="top" expand="sm" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="https://vk.com/lubimchik76?ysclid=ld9dg7m7ad739621248">
          {/*<img
            alt=""
            src="/icon/Cat.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />*/}
          Любимчик
          {/* <span className="fs-6  text-secondary">
            {" "}
            Помощь бездомным животным
          </span>*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Группа{" "}
            <a href="https://vk.com/lubimchik76?ysclid=ld9dg7m7ad739621248">
              ВКонтакте
            </a>
          </Navbar.Text>
        </Navbar.Collapse>*/}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*волонтеры и их истории/СМИ*/}
            <Nav.Link href="/team">Команда</Nav.Link>
            {/*кураторство/уборка/водитель/посылки/пожертвования*/}
            <Nav.Link href="/help">Помощь</Nav.Link>
            {/*на улице/на лечении/на пристрое/дома - для всех форм фильтр*/}
            <Nav.Link href="/animals">Животные</Nav.Link>
          </Nav>
          <Nav className="me-auto" className="justify-content-end">
            <Nav.Link href="/login">Регистрация </Nav.Link>
            <Nav.Link href="/login">Вход </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(MainHeader);
