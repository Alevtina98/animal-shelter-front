import React, { FC, memo, useEffect, useState } from "react";

import { FilterKeyType } from "@/pages/animals/components/headerContent/bage/BadgeList";

import AnimalsHeader from "./AnimalsHeader";
import AnimalsBody from "./AnimalsBody";

import * as animalFiles from "./data/animals.json";

const Animals: FC = () => {
  const [resultList, setResultList] = useState<any>([]);
  const filterKeyList: FilterKeyType[] = ["lookingHome", "cat"]

  useEffect(() => {
    const loadList = async () => {
      /* If file is not selected, then show alert message */
      if (!animalFiles) return;
      const str = animalFiles;
      setResultList(str.animals);
    };
    loadList().then((r) => {});
  }, [animalFiles]);

  return (
    <>
      <AnimalsHeader resultCount={resultList.length} filters={filterKeyList}/>
      <AnimalsBody list={resultList} />
    </>
  );
};
export default memo(Animals);
