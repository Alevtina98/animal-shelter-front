import { FC, memo, useEffect, useState } from "react";
import { Badge, Button, Card, Nav, Row } from "react-bootstrap";
import AnimalCardGrid from "@/pages/animals/AnimalCardGrid";
import Layout from "@/component/Layout";
import PageHeader from "@/pages/animals/header/AnimalsHeader";
import * as animalFiles from "../../../public/animals.json";
import FilterHeader from "@/pages/animals/FilterHeader";
import styles from "@/styles/PageHeader.module.css";

const Animals: FC = () => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const loadList = async () => {
      /* If file is not selected, then show alert message */
      if (!animalFiles) return;
      const str = animalFiles;
      setList(str.animals);
    };
    loadList().then((r) => {});
  }, [animalFiles]);

  return (
    <>
      {/* <div className="w-100 d-flex justify-content-between">
        <h3></h3>
        <Button
          variant="danger"
          href="https://vk.com/lubimchik76?w=app5619682_-38870510&ysclid=ld9dg7m7ad739621248"
        >
          Заполнить анкету
        </Button>
      </div>*/}
      <div className={styles.animalContainer}>
        <PageHeader count={list.length}></PageHeader>
        <FilterHeader></FilterHeader>
      </div>

      <AnimalCardGrid list={list} />
    </>
  );
};
export default memo(Animals);
