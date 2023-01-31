import { FC, memo } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";
import { FaTimes } from "react-icons/fa";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {
  count: number;
}
const AnimalsHeader: FC<IPageHeaderProps> = ({ count }) => {
  return (
    <Navbar expand="sm" collapseOnSelect sticky="top" variant="dark">
      <Container fluid>
        <Navbar.Text> Колличество животных: {count}</Navbar.Text>

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
