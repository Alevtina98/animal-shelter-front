import { FC, memo } from "react";
import { Button, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";

// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {
  count: number;
}
const AnimalsHeader: FC<IPageHeaderProps> = ({ count }) => {
  return (
    <Navbar
      bg="none"
      expand="sm"
      collapseOnSelect
      sticky="top"
      className={styles.panel}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Text> Колличество: {count}</Navbar.Text>
        <Navbar.Collapse id="page-navbar-nav" className="justify-content-end">
          <Button
            variant="outline-light"
            href="https://vk.com/lubimchik76?w=app5619682_-38870510&ysclid=ld9dg7m7ad739621248"
          >
            Стать куратором
          </Button>
          <Button
            variant="danger"
            href="https://vk.com/lubimchik76?w=app5619682_-38870510&ysclid=ld9dg7m7ad739621248"
          >
            Приютить
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(AnimalsHeader);
