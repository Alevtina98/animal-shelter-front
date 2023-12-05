import React, { FC, memo } from "react";

import TeamHeader from "@/pages/team/TeamHeader";
import TeamBody from "@/pages/team/TeamBody";
import TeamFooter from "@/pages/team/TeamFooter";

const Team: FC = () => (
    <>
      <TeamHeader />
      <TeamBody />
      <TeamFooter />
    </>
  );

export default memo(Team);
