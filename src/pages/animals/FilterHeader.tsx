import { FC, memo, useState } from "react";
import { Badge, Button, Container, Nav, Offcanvas } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/PageHeader.module.css";
import { FaTimes, FaFilter } from "react-icons/fa";
import clsx from "clsx";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {}
const AnimalsHeader: FC<IPageHeaderProps> = ({}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      expand="sm"
      variant="dark"
      sticky="top"
      className={clsx("flex-nowrap", styles.panel)}
    >
      <Container fluid className="d-flex h-100 w-100 justify-content-between">
        <div>
          <Button
            aria-expanded={true}
            className="text-nowrap"
            variant="dark"
            onClick={handleShow}
          >
            <FaFilter></FaFilter> Фильтр
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Фильтрация</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>какие-то категории</Offcanvas.Body>
          </Offcanvas>
        </div>

        <div
          className="overflow-hidden position-relative w-100 h-100"
          style={{ marginLeft: "6px" }}
        >
          <div
            className={clsx(
              "d-flex flex-nowrap overflow-auto position-absolute w-100 h-100 align-items-center",
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
        </div>
      </Container>
    </Navbar>
  );
};

export default memo(AnimalsHeader);
