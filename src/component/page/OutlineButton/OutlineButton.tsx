import React, { FC, memo } from "react";
import { Button } from "react-bootstrap";

import styles from "./OutlineButton.module.css";
import {FaVk} from "react-icons/fa";

export interface IButton {
  caption: string;
  link: string;
  icon?: JSX.Element;

}
const OutlineButton: FC<IButton> = ({ caption, link, icon }) => (
    <Button
        variant="outline-light"
        target="_blank"
        className={styles.pageButton}
        href={link}
    >
        {icon}
        {caption}
    </Button>
)

export default memo(OutlineButton);
