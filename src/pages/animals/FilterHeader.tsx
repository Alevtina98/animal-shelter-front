import { FC, memo } from "react";
import { Badge, Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";
import { FaTimes, FaFilter } from "react-icons/fa";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {}
const AnimalsHeader: FC<IPageHeaderProps> = ({}) => {
  return (
    <Navbar
      expand="sm"
      variant="dark"
      sticky="top"
      className={styles.mainHeader}
    >
      <Button href="" className="width-100 text-nowrap" variant="dark">
        <FaFilter></FaFilter> Фильтр
      </Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Container className="justify-content-start">
        <Navbar.Collapse
          id="page-navbar-nav-badge"
          className="justify-content-start"
        >
          <Badge pill bg="light" text="dark">
            ищет дом
            <Button
              size="sm"
              variant="icon"
              className="d-inline-flex justify-content-center align-items-center"
            >
              <FaTimes />
            </Button>
          </Badge>
          <Badge pill bg="light" text="dark">
            ищет дом
            <Button
              size="sm"
              variant="icon"
              className="d-inline-flex justify-content-center align-items-center"
            >
              <FaTimes />
            </Button>
          </Badge>
          <Badge pill bg="light" text="dark">
            ищет дом
            <Button
              size="sm"
              variant="icon"
              className="d-inline-flex justify-content-center align-items-center"
            >
              <FaTimes />
            </Button>
          </Badge>
          <Badge pill bg="light" text="dark">
            кошка
            <Button
              size="sm"
              variant="icon"
              className="d-inline-flex justify-content-center align-items-center"
            >
              <FaTimes />
            </Button>
          </Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(AnimalsHeader);
