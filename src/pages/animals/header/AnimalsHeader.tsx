import { FC, memo } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";
import { FaTimes } from "react-icons/fa";
import clsx from "clsx";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {
  count: number;
}
const AnimalsHeader: FC<IPageHeaderProps> = ({ count }) => {
  return (
    <Navbar
      expand="sm"
      collapseOnSelect
      sticky="top"
      variant="dark"
      className={styles.panel}
    >
      <Container fluid className="d-flex w-100 justify-content-between">
        <Navbar.Collapse
          id="page-navbar-nav-sum"
          className="justify-content-start"
        >
          <Navbar.Text> Колличество животных: {count}</Navbar.Text>
        </Navbar.Collapse>

        {/* <Button
          variant="outline-light"
          href="https://vk.com/lubimchik76?w=app5619682_-38870510&ysclid=ld9dg7m7ad739621248"
        >
          Стать куратором
        </Button>*/}

        <Button
          className={styles.mainButton}
          bsSize="large"
          block
          variant="danger"
          href="https://m.vk.com/app5619682_-38870510?act=app_r"
        >
          Стать ближе
        </Button>
      </Container>
    </Navbar>
  );
};

export default memo(AnimalsHeader);
