import { FC, memo } from "react";
import { Badge, Button } from "react-bootstrap";

import { FaTimes } from "react-icons/fa";
import clsx from "clsx";

import styles from "@/styles/PageHeader.module.css";
import { FilterValueType } from "@/pages/animals/components/bodyContent/AnimalsContent";

export const filterLabel: Record<FilterValueType, string> = {
  "ищет дом": "ищет дом",
  dog: "собака",
  cat: "кошка",
  female: "девочка",
  male: "мальчик",
};

export interface IBadgeList {
  keyList: FilterValueType[];
}
const BadgeList: FC<IBadgeList> = ({ keyList }) => (
  <div
    className={clsx(
      "d-flex flex-nowrap overflow-auto position-absolute w-100 h-100 align-items-center",
      styles.filters
    )}
  >
    {keyList.map((key) => (
      <Badge pill bg="light" text="dark" key={key}>
        {key}
        <Button
          size="sm"
          variant="icon"
          className="d-inline-flex justify-content-center align-items-center"
        >
          <FaTimes />
        </Button>
      </Badge>
    ))}
  </div>
);

export default memo(BadgeList);
