import React, { FC, memo } from "react";

import TeamContent from "@/pages/team/components/bodyContent/teamContent/TeamContent";
import PageBody from "@/component/page/pageBody/PageBody";

export interface ITeamBodyProps {
}

const TeamBody: FC<ITeamBodyProps> = () => (
    <PageBody contentElement={<TeamContent />}/>
);

export default memo(TeamBody);
