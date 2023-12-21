import React, { FC, memo, useEffect, useState } from "react";

import PageBody from "@/component/page/pageBody/PageBody";
import AnimalsContent, {
  UserFilterType,
} from "@/pages/animals/components/bodyContent/AnimalsContent";

export interface ITeamBodyProps {
  list: any[];
  filters: UserFilterType;
}

const AnimalsBody: FC<ITeamBodyProps> = ({ list, filters }) => {
  return (
    <PageBody
      contentElement={<AnimalsContent list={list} filters={filters} />}
    />
  );
};

export default memo(AnimalsBody);
