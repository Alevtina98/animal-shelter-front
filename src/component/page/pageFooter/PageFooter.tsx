import React, { FC, memo } from "react";
import { Button, Container } from "react-bootstrap";

import styles from "./PageFooter.module.css";

export interface IPageFooter {
  text: string | null | undefined;
}
const PageFooter: FC<IPageFooter> = ({ text }) => {
  if (!text || text === "") return null;
  return (
    <Container fluid className={styles.pageFooter}>
      <div className="text-center">{text}</div>
    </Container>
  );
};

export default memo(PageFooter);
