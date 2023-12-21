import React, { FC, memo } from "react";

import PageHeader from "@/component/page/pageHeader/PageHeader";
import { FaVk } from "react-icons/fa";
import styles from "@/styles/PageHeader.module.css";
import FilterContent from "@/pages/animals/components/headerContent/FilterHeader";

import { FilterValueType } from "@/pages/animals/components/headerContent/bage/BadgeList";
import { UserFilterType } from "@/pages/animals/components/bodyContent/AnimalsContent";

export interface IPageHeaderProps {
  resultCount: number;
  filters: UserFilterType;
}
const AnimalsHeader: FC<IPageHeaderProps> = ({ resultCount, filters }) => (
  <div className={styles.animalContainer}>
    <PageHeader
      textElement={<> Колличество животных: {resultCount} </>}
      button={{
        caption: "Познакомиться",
        link: "https://m.vk.com/app5619682_-38870510?act=app_r",
        icon: <FaVk size="25" className="me-2"></FaVk>,
      }}
    />
    <FilterContent badges={filters} />
  </div>
);

export default memo(AnimalsHeader);
