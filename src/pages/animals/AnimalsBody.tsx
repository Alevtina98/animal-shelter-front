import React, { FC, memo } from "react";

import PageBody from "@/component/page/pageBody/PageBody";
import AnimalsContent from "@/pages/animals/components/bodyContent/AnimalsContent";

export interface ITeamBodyProps {
    list: any[];
}

const AnimalsBody: FC<ITeamBodyProps> = ({list}) => (
   <PageBody contentElement={<AnimalsContent list={list}/>}/>
);

export default memo(AnimalsBody);
