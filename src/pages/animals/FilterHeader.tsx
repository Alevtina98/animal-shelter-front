import { FC, memo } from "react";
import { Badge, Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";
import { FaTimes, FaFilter } from "react-icons/fa";
import clsx from "clsx";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {}
const AnimalsHeader: FC<IPageHeaderProps> = ({}) => {
  return (
    <Navbar
      expand="sm"
      variant="dark"
      sticky="top"
      className={clsx("flex-nowrap", styles.panel)}
    >
      <Button
        aria-expanded={true}
        href=""
        className="width-100 text-nowrap"
        variant="dark"
      >
        <FaFilter></FaFilter> Фильтр
      </Button>

      <Container
        className={clsx(
          "justify-content-start overflow-hidden  position-relative w-100 h-100",
          styles.filtersContainer
        )}
      >
        <div
          className={clsx(
            "d-flex flex-nowrap overflow-auto position-absolute w-100 ",
            styles.filters
          )}
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
        </div>
      </Container>
    </Navbar>
  );
};

export default memo(AnimalsHeader);
