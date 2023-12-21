import React, { FC, memo, useEffect, useState } from "react";

import AnimalsHeader from "./components/AnimalsHeader";
import AnimalsBody from "./components/AnimalsBody";

import * as animalFiles from "../../../public/animal/animal.json";
import { UserFilterType } from "@/pages/animals/components/bodyContent/AnimalsContent";

const Animals: FC = () => {
  const [resultList, setResultList] = useState<any>([]);
  const userFilter: UserFilterType = {
    /*  status: "ищет дом",
    color: "степной",*/
  } as UserFilterType;

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
      <AnimalsHeader resultCount={resultList.length} filters={userFilter} />
      <AnimalsBody list={resultList} filters={userFilter} />
    </>
  );
};
export default memo(Animals);
