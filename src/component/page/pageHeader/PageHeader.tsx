import React, { FC, memo } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import styles from "@/component/app/appHeader/AppHeader.module.css";
import OutlineButton, {
  IButton,
} from "@/component/page/OutlineButton/OutlineButton";

export interface IRageHeaderProps {
  textElement: JSX.Element;
  button: IButton;
}
const PageHeader: FC<IRageHeaderProps> = ({ textElement, button }) => (
  <Navbar expand="sm" collapseOnSelect sticky="top" variant="dark">
    <Container fluid className="d-flex w-100 justify-content-between">
      <Navbar.Collapse
        id="page-navbar-nav-sum"
        className="justify-content-start"
      >
        <Navbar.Text> {textElement} </Navbar.Text>
      </Navbar.Collapse>
      <OutlineButton {...button} />
    </Container>
  </Navbar>
);

export default memo(PageHeader);
