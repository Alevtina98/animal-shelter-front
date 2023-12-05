import React, { FC, memo } from "react";
import { Button, Container } from "react-bootstrap";
import { FaVk } from "react-icons/fa";

import styles from "./AppFooter.module.css";

const AppFooter: FC = () => (
    <Container fluid className={styles.footer}>
        <Button variant="icon" href="https://vk.com/lubimchik76"  target="_blank">
            <FaVk color="white" size="40"></FaVk>
        </Button>
        <div className="d-flex ">
            ЛЮБИМЧИК Помощь бездомным животным Рыбинск
        </div>
    </Container>);

export default memo(AppFooter);
