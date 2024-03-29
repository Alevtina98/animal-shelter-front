import { FC, memo } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import clsx from "clsx";

import Filter from "@/pages/animals/components/headerContent/Filter";

import styles from "@/styles/PageHeader.module.css";
import BadgeList from "@/pages/animals/components/headerContent/bage/BadgeList";
import { UserFilterType } from "@/pages/animals/components/bodyContent/AnimalsContent";
// примеры
// https://dobrovmeste.ru/novosti-fonda-pomoshhi-bezdomnym-zhivotnym

export interface IPageHeaderProps {
  badges: UserFilterType;
}
const FilterHeader: FC<IPageHeaderProps> = ({ badges }) => {
  return (
    <Navbar
      expand="sm"
      variant="dark"
      sticky="top"
      className={clsx("flex-nowrap", styles.panel)}
    >
      <Container fluid className="d-flex h-100 w-100 justify-content-between">
        <div>
          <Filter />
        </div>

        <div
          className="overflow-hidden position-relative w-100 h-100"
          style={{ marginLeft: "6px" }}
        >
          <BadgeList keyList={Object.values(badges)} />
        </div>
      </Container>
    </Navbar>
  );
};

export default memo(FilterHeader);
